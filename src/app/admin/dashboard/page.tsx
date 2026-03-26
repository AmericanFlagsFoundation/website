"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Grant = {
  id: string;
  name: string;
  funder: string;
  amount: number | null;
  deadline: string | null;
  status: "researching" | "drafting" | "submitted" | "won" | "lost" | "not_applying";
  notes: string | null;
  link: string | null;
  created_at: string;
};

const STATUS_CONFIG = {
  researching: { label: "Researching", color: "bg-blue-100 text-blue-700" },
  drafting: { label: "Drafting", color: "bg-yellow-100 text-yellow-700" },
  submitted: { label: "Submitted", color: "bg-purple-100 text-purple-700" },
  won: { label: "Won ✅", color: "bg-green-100 text-green-700" },
  lost: { label: "Lost", color: "bg-red-100 text-red-700" },
  not_applying: { label: "Not Applying", color: "bg-gray-100 text-gray-500" },
};

const EMPTY_FORM = {
  name: "",
  funder: "",
  amount: "",
  deadline: "",
  status: "researching" as Grant["status"],
  notes: "",
  link: "",
};

export default function Dashboard() {
  const router = useRouter();
  const [grants, setGrants] = useState<Grant[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editId, setEditId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    fetchGrants();
  }, []);

  async function fetchGrants() {
    const res = await fetch("/api/admin/grants");
    if (res.status === 401) {
      router.push("/admin/login");
      return;
    }
    const data = await res.json();
    setGrants(data);
    setLoading(false);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);

    const payload = {
      ...form,
      amount: form.amount ? Number(form.amount) : null,
      deadline: form.deadline || null,
      ...(editId ? { id: editId } : {}),
    };

    const res = await fetch("/api/admin/grants", {
      method: editId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      await fetchGrants();
      setShowForm(false);
      setForm(EMPTY_FORM);
      setEditId(null);
    }
    setSaving(false);
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this grant?")) return;
    await fetch("/api/admin/grants", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    await fetchGrants();
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  }

  function startEdit(g: Grant) {
    setForm({
      name: g.name,
      funder: g.funder,
      amount: g.amount?.toString() || "",
      deadline: g.deadline || "",
      status: g.status,
      notes: g.notes || "",
      link: g.link || "",
    });
    setEditId(g.id);
    setShowForm(true);
  }

  const filtered = grants.filter((g) => {
    const matchSearch =
      g.name.toLowerCase().includes(search.toLowerCase()) ||
      g.funder.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "all" || g.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const totalWon = grants.filter((g) => g.status === "won").reduce((sum, g) => sum + (g.amount || 0), 0);
  const totalSubmitted = grants.filter((g) => g.status === "submitted").length;
  const upcoming = grants.filter((g) => g.deadline && new Date(g.deadline) > new Date()).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="AFF" className="h-9 w-auto" />
            <div>
              <h1 className="text-lg font-bold text-navy-700">AFF Grant Tracker</h1>
              <p className="text-xs text-gray-500">American Flags Foundation</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs text-gray-600 hover:bg-gray-50"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Total Grants", value: grants.length, color: "text-navy-700" },
            { label: "Submitted", value: totalSubmitted, color: "text-purple-600" },
            { label: "Grants Won", value: grants.filter(g => g.status === "won").length, color: "text-green-600" },
            { label: "Funding Won", value: `$${totalWon.toLocaleString()}`, color: "text-green-600" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-white p-4 shadow-sm">
              <p className="text-xs text-gray-500">{s.label}</p>
              <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="Search grants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-navy-200"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none"
          >
            <option value="all">All Statuses</option>
            {Object.entries(STATUS_CONFIG).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
          <button
            onClick={() => { setShowForm(true); setEditId(null); setForm(EMPTY_FORM); }}
            className="ml-auto rounded-lg bg-navy-700 px-4 py-2 text-sm font-semibold text-white hover:bg-navy-800"
          >
            + Add Grant
          </button>
        </div>

        {/* Grant Form Modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
              <h2 className="mb-4 text-lg font-bold text-navy-700">
                {editId ? "Edit Grant" : "Add New Grant"}
              </h2>
              <form onSubmit={handleSave} className="flex flex-col gap-3">
                <input required placeholder="Grant Name *" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input-field" />
                <input required placeholder="Funder / Organization *" value={form.funder}
                  onChange={(e) => setForm({ ...form, funder: e.target.value })}
                  className="input-field" />
                <div className="grid grid-cols-2 gap-3">
                  <input placeholder="Amount ($)" type="number" value={form.amount}
                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                    className="input-field" />
                  <input placeholder="Deadline" type="date" value={form.deadline}
                    onChange={(e) => setForm({ ...form, deadline: e.target.value })}
                    className="input-field" />
                </div>
                <select value={form.status}
                  onChange={(e) => setForm({ ...form, status: e.target.value as Grant["status"] })}
                  className="input-field">
                  {Object.entries(STATUS_CONFIG).map(([k, v]) => (
                    <option key={k} value={k}>{v.label}</option>
                  ))}
                </select>
                <input placeholder="Grant URL / Link" value={form.link}
                  onChange={(e) => setForm({ ...form, link: e.target.value })}
                  className="input-field" />
                <textarea placeholder="Notes" value={form.notes} rows={3}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="input-field resize-none" />

                <div className="flex gap-3 pt-2">
                  <button type="submit" disabled={saving}
                    className="flex-1 rounded-lg bg-navy-700 py-2.5 text-sm font-semibold text-white hover:bg-navy-800 disabled:opacity-50">
                    {saving ? "Saving..." : editId ? "Save Changes" : "Add Grant"}
                  </button>
                  <button type="button"
                    onClick={() => { setShowForm(false); setEditId(null); setForm(EMPTY_FORM); }}
                    className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Grant List */}
        {loading ? (
          <div className="py-16 text-center text-gray-400">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="py-16 text-center text-gray-400">
            {grants.length === 0 ? "No grants yet. Click \"+ Add Grant\" to get started." : "No grants match your filter."}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filtered.map((g) => {
              const deadlinePassed = g.deadline && new Date(g.deadline) < new Date();
              const daysLeft = g.deadline
                ? Math.ceil((new Date(g.deadline).getTime() - Date.now()) / 86400000)
                : null;

              return (
                <div key={g.id} className="rounded-xl bg-white shadow-sm">
                  <div
                    className="flex cursor-pointer items-center gap-4 px-5 py-4"
                    onClick={() => setExpandedId(expandedId === g.id ? null : g.id)}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="font-semibold text-navy-700 truncate">{g.name}</p>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_CONFIG[g.status].color}`}>
                          {STATUS_CONFIG[g.status].label}
                        </span>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">{g.funder}</p>
                    </div>
                    <div className="hidden text-right sm:block shrink-0">
                      {g.amount && (
                        <p className="font-semibold text-green-600">${g.amount.toLocaleString()}</p>
                      )}
                      {g.deadline && (
                        <p className={`text-xs ${deadlinePassed ? "text-red-500" : daysLeft! <= 14 ? "text-orange-500" : "text-gray-400"}`}>
                          {deadlinePassed ? "Past due" : `${daysLeft}d left`} · {new Date(g.deadline).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                    <svg className={`h-4 w-4 text-gray-400 transition-transform shrink-0 ${expandedId === g.id ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {expandedId === g.id && (
                    <div className="border-t px-5 py-4">
                      {g.notes && <p className="mb-3 text-sm text-gray-600">{g.notes}</p>}
                      {g.link && (
                        <a href={g.link} target="_blank" rel="noopener noreferrer"
                          className="mb-3 block text-sm text-blue-600 hover:underline truncate">
                          {g.link}
                        </a>
                      )}
                      <div className="flex gap-3">
                        <button onClick={() => startEdit(g)}
                          className="rounded-lg border border-navy-200 px-4 py-1.5 text-sm text-navy-700 hover:bg-navy-50">
                          Edit
                        </button>
                        <button onClick={() => handleDelete(g.id)}
                          className="rounded-lg border border-red-200 px-4 py-1.5 text-sm text-red-600 hover:bg-red-50">
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
