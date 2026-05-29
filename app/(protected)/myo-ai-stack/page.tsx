"use client";
// myo stack page
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { CATALOG_TOOLS, type CatalogTool } from "@/lib/tools-catalog";

interface DbUserToolRow {
  tool_name: string;
  is_curated: boolean;
  custom_data: Record<string, unknown> | null;
}

interface ToolItem {
  name: string;
  maker: string;
  favicon: string;
  desc: string;
  price: string;
  plan?: string;
  billing?: string;
  joined?: string;
  renewal?: string;
  tag: string;
  tagClass?: string;
  source: "toolkit" | "you";
  starred: boolean;
}

function catalogToToolItem(t: CatalogTool): ToolItem {
  return {
    name: t.name,
    maker: t.maker,
    favicon: t.faviconDomain,
    desc: t.description,
    price: t.price,
    plan: t.plan,
    billing: "Monthly",
    tag: t.category,
    tagClass: t.categoryClass ?? "bg-[#E6F1FB] text-[#004AAD]",
    source: "toolkit",
    starred: true,
  };
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function LogoSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-70.40 -827.40 6209.80 954.80"
      preserveAspectRatio="xMidYMid meet"
      className="block h-auto w-full"
    >
      <title>AI Economy</title>
      <g fill="currentColor">
        <path d="M164 0L22 0L278-700L431-700L686 0L543 0L488-159L219-159L164 0ZM256-264L452-264L354-546L256-264Z M963 0L828 0L828-700L963-700L963 0Z" />
        <path d="M1571-700L1171-700L1171 0L1571 0L1571-80L1256-80L1256-340L1551-340L1551-420L1256-420L1256-620L1571-620L1571-700Z M1771-350L1771-350Q1771-432 1807.500-493.500Q1844-555 1903-590Q1962-625 2031-625L2031-625Q2081-625 2122.500-612Q2164-599 2198-575.500Q2232-552 2256-521L2256-521L2256-633Q2212-672 2160-691Q2108-710 2031-710L2031-710Q1958-710 1894.500-683.500Q1831-657 1783-608.500Q1735-560 1708-494Q1681-428 1681-350L1681-350Q1681-272 1708-206Q1735-140 1783-91.500Q1831-43 1894.500-16.500Q1958 10 2031 10L2031 10Q2108 10 2160-9Q2212-28 2256-67L2256-67L2256-179Q2232-148 2198-124.500Q2164-101 2122.500-88Q2081-75 2031-75L2031-75Q1962-75 1903-110Q1844-145 1807.500-207Q1771-269 1771-350Z M2456-350L2456-350Q2456-429 2490.500-491Q2525-553 2585-589Q2645-625 2721-625L2721-625Q2798-625 2857.500-589Q2917-553 2951.500-491Q2986-429 2986-350L2986-350Q2986-271 2951.500-209Q2917-147 2857.500-111Q2798-75 2721-75L2721-75Q2645-75 2585-111Q2525-147 2490.500-209Q2456-271 2456-350ZM2366-350L2366-350Q2366-274 2392.500-208Q2419-142 2467-93.500Q2515-45 2580-17.500Q2645 10 2721 10L2721 10Q2798 10 2862.500-17.500Q2927-45 2975-93.500Q3023-142 3049.500-208Q3076-274 3076-350L3076-350Q3076-427 3049.500-492.500Q3023-558 2975-606.500Q2927-655 2862.500-682.500Q2798-710 2721-710L2721-710Q2645-710 2580-682.500Q2515-655 2467-606.500Q2419-558 2392.500-492.500Q2366-427 2366-350Z M3811-700L3726-700L3726-179L3196-735L3196 0L3281 0L3281-521L3811 35L3811-700Z M4021-350L4021-350Q4021-429 4055.500-491Q4090-553 4150-589Q4210-625 4286-625L4286-625Q4363-625 4422.500-589Q4482-553 4516.500-491Q4551-429 4551-350L4551-350Q4551-271 4516.500-209Q4482-147 4422.500-111Q4363-75 4286-75L4286-75Q4210-75 4150-111Q4090-147 4055.500-209Q4021-271 4021-350ZM3931-350L3931-350Q3931-274 3957.500-208Q3984-142 4032-93.500Q4080-45 4145-17.500Q4210 10 4286 10L4286 10Q4363 10 4427.500-17.500Q4492-45 4540-93.500Q4588-142 4614.500-208Q4641-274 4641-350L4641-350Q4641-427 4614.500-492.500Q4588-558 4540-606.500Q4492-655 4427.500-682.500Q4363-710 4286-710L4286-710Q4210-710 4145-682.500Q4080-655 4032-606.500Q3984-558 3957.500-492.500Q3931-427 3931-350Z M4806 0L4858-473L5086-65L5314-473L5366 0L5451 0L5366-735L5086-228L4806-735L4721 0L4806 0Z M6047-700L5952-700L5771-376L5591-700L5496-700L5729-301L5729 0L5814 0L5814-302L6047-700Z" />
      </g>
    </svg>
  );
}

const EXCHANGE_RATES: Record<string, { rate: number; symbol: string }> = {
  USD: { rate: 1, symbol: "$" },
  AUD: { rate: 1.52, symbol: "$" },
  GBP: { rate: 0.79, symbol: "£" },
  EUR: { rate: 0.93, symbol: "€" },
  NZD: { rate: 1.66, symbol: "$" },
  CAD: { rate: 1.36, symbol: "$" },
};

export default function DashboardClient() {
  const [tools, setTools] = useState<ToolItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [tableOpen, setTableOpen] = useState(false);
  const [devOpen, setDevOpen] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [activeFilter, setActiveFilter] = useState("All");
  const [billingType, setBillingType] = useState("Monthly");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const addFormRef = useRef<HTMLDialogElement>(null);

  // Hydrate the stack from the DB on mount. Stack = curated tools the user
  // has starred (synced with /toolkit/cluster) plus their own custom additions.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/user-tools");
        if (!res.ok) throw new Error(await res.text());
        const data = await res.json();
        const rows = (data.tools ?? []) as DbUserToolRow[];

        const catalogByName = new Map<string, CatalogTool>(
          CATALOG_TOOLS.map((t) => [t.name, t]),
        );

        const starredCatalog: ToolItem[] = rows
          .filter((r) => r.is_curated)
          .map((r) => catalogByName.get(r.tool_name))
          .filter((t): t is CatalogTool => Boolean(t))
          .map(catalogToToolItem);

        const customTools: ToolItem[] = rows
          .filter((r) => !r.is_curated)
          .map((r) => {
            const d = r.custom_data ?? {};
            const str = (k: string, fallback = "") =>
              typeof d[k] === "string" ? (d[k] as string) : fallback;
            return {
              name: r.tool_name,
              maker: str("maker", "Custom Tool"),
              favicon: str("favicon", "generic"),
              desc: str("desc", "User added tool to my AI stack."),
              price: str("price", "—"),
              plan: str("plan") || undefined,
              billing: str("billing", "Monthly"),
              joined: str("joined") || undefined,
              renewal: str("renewal") || undefined,
              tag: str("tag", "Added by You"),
              tagClass:
                str("tagClass") ||
                "bg-[rgba(232,137,12,.12)] text-[#E8890C] border border-dashed border-[#E8890C]",
              source: "you",
              starred: false,
            };
          });

        if (!cancelled) setTools([...starredCatalog, ...customTools]);
      } catch (e) {
        console.error("Failed to load user tools", e);
      } finally {
        if (!cancelled) setHydrated(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const openAddForm = () => {
    setEditingIndex(null);
    addFormRef.current?.showModal();
  };

  const openEditForm = (index: number) => {
    const tool = filteredTools[index];
    // Find the actual index in the main tools array
    const actualIndex = tools.findIndex(t => t === tool);
    setEditingIndex(actualIndex);
    setBillingType(tool.billing || "Monthly");
    addFormRef.current?.showModal();
  };

  const closeAddForm = () => {
    setEditingIndex(null);
    addFormRef.current?.close();
  };

  // Pre-fill form when editing
  useEffect(() => {
    if (editingIndex !== null && addFormRef.current) {
      const tool = tools[editingIndex];
      const form = addFormRef.current.querySelector("form");
      if (form) {
        (form.elements.namedItem("name") as HTMLInputElement).value = tool.name;
        (form.elements.namedItem("tag") as HTMLInputElement).value = tool.tag || "";
        (form.elements.namedItem("desc") as HTMLInputElement).value = tool.desc || "";
        (form.elements.namedItem("price") as HTMLInputElement).value = tool.price || "";
        (form.elements.namedItem("plan") as HTMLInputElement).value = tool.plan || "";
        (form.elements.namedItem("url") as HTMLInputElement).value = tool.favicon || "";
        if (tool.joined) {
          // Try to parse date if it exists, though joined is a string like "05 May 2026"
          // For now we'll just leave it or handle it if we want to be fancy.
          // But usually user adds it via the date picker which is ISO.
        }
      }
    } else if (addFormRef.current) {
      addFormRef.current.querySelector("form")?.reset();
    }
  }, [editingIndex, tools]);

  const handleAddTool = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const toolName = ((formData.get("name") as string) ?? "").trim();
    if (!toolName) return;

    const previousName =
      editingIndex !== null ? tools[editingIndex].name : null;

    const customData = {
      maker: "Custom Tool",
      favicon: (formData.get("url") as string) || "generic",
      desc:
        (formData.get("desc") as string) || "User added tool to my AI stack.",
      price: (formData.get("price") as string) || "—",
      plan: (formData.get("plan") as string) || "—",
      billing: billingType,
      tag: (formData.get("tag") as string) || "Added by You",
      tagClass:
        "bg-[rgba(232,137,12,.12)] text-[#E8890C] border border-dashed border-[#E8890C]",
      joined:
        editingIndex !== null && tools[editingIndex].joined
          ? tools[editingIndex].joined!
          : new Date().toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            }),
    };

    const toolData: ToolItem = {
      ...customData,
      name: toolName,
      source: "you",
      starred: false,
    };

    if (editingIndex !== null) {
      const updatedTools = [...tools];
      updatedTools[editingIndex] = toolData;
      setTools(updatedTools);
    } else {
      setTools([...tools, toolData]);
    }

    form.reset();
    setBillingType("Monthly");
    closeAddForm();

    // Persist to DB. If renaming, drop the old row first.
    (async () => {
      try {
        if (previousName && previousName !== toolName) {
          await fetch(
            `/api/user-tools?name=${encodeURIComponent(previousName)}`,
            { method: "DELETE" },
          );
        }
        const res = await fetch("/api/user-tools", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            tool_name: toolName,
            is_curated: false,
            custom_data: customData,
          }),
        });
        if (!res.ok) throw new Error(await res.text());
      } catch (err) {
        console.error("Failed to save tool", err);
      }
    })();
  };

  const handleToolAction = (toolName: string) => {
    setTools((prev) => prev.filter((t) => t.name !== toolName));
    (async () => {
      try {
        const res = await fetch(
          `/api/user-tools?name=${encodeURIComponent(toolName)}`,
          { method: "DELETE" },
        );
        if (!res.ok) throw new Error(await res.text());
      } catch (err) {
        console.error("Failed to delete tool", err);
      }
    })();
  };

  const baseMonthlyTotal = tools.reduce((acc, tool) => {
    const priceStr = tool.plan?.split(":")[1] || tool.price || "";
    const priceMatch = priceStr.match(/\d+/);
    return acc + (priceMatch ? parseInt(priceMatch[0]) : 0);
  }, 0);

  const selectedCurrency = EXCHANGE_RATES[currency];
  const monthlyTotal = baseMonthlyTotal * selectedCurrency.rate;
  const yearlyTotal = monthlyTotal * 12;

  const starredCount = tools.filter((t) => t.starred).length;
  const addedCount = tools.filter((t) => t.source === "you").length;
  const totalCount = tools.length;

  const coreAICount = tools.filter((t) =>
    ["My Pick", "LLM & Image Gen", "AI Search"].includes(t.tag),
  ).length;

  const filteredTools = tools.filter((tool) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Sarah's Toolkit") return tool.source === "toolkit";
    if (activeFilter === "My Tools") return tool.source === "you";
    if (activeFilter === "Core AI")
      return ["My Pick", "LLM & Image Gen", "AI Search"].includes(tool.tag);
    if (activeFilter === "Meetings & Productivity") return tool.tag === "Meetings";
    return true;
  });

  const handleDownloadCSV = () => {
    const headers = ["Tool", "Plan", "Billing", "Cost", "Joined", "Next Renewal"];
    const rows = tools.map((tool) => [
      `"${tool.name}"`,
      `"${tool.plan || ""}"`,
      `"${tool.billing || ""}"`,
      `"${tool.price || ""}"`,
      `"${tool.joined || "—"}"`,
      `"${tool.renewal || "—"}"`,
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "my_ai_stack.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white text-[#444444]">
      <nav className="fixed left-0 right-0 top-0 z-[100] h-16 border-b border-[#E2E2E2] bg-[rgba(255,255,255,.97)] backdrop-blur-[12px]">
        <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between px-8">
          <Link
            href="/dashboard"
            className="block w-[150px] shrink-0 text-[#111111] no-underline"
          >
            <LogoSVG />
          </Link>
          <ul className="hidden list-none items-center gap-8 [@media(min-width:861px)]:flex">
            <li>
              <Link
                href="/upsell/build-your-own-ai-stack"
                className="text-[14px] font-medium text-[#111111] hover:text-[#004AAD]"
              >
                Sarah&apos;s Toolkit
              </Link>
            </li>
            <li>
              <Link
                href="/myo-ai-stack"
                className="text-[14px] font-semibold text-[#E8890C]"
              >
                MYO Stack
              </Link>
            </li>
            <li>
              <Link
                href="/llm-comparison"
                className="text-[14px] font-medium text-[#111111] hover:text-[#004AAD]"
              >
                LLMs
              </Link>
            </li>
            <li>
              <Link
                href="/toolkit/cluster"
                className="text-[14px] font-medium text-[#111111] hover:text-[#004AAD]"
              >
                Use Cases
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-[14px] font-medium text-[#111111] hover:text-[#004AAD]"
              >
                About
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/SarahBalmer"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sarah Balmer on LinkedIn"
                className="ml-3 inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#004AAD] text-[#111111] transition-all hover:-translate-y-[1px] hover:bg-[#111111] hover:text-white"
              >
                <LinkedInIcon />
              </a>
            </li>
          </ul>
          <div className="flex items-center">
            {/* <a
              href="https://www.linkedin.com/in/SarahBalmer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sarah Balmer on LinkedIn"
              className="inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#004AAD] text-white transition-all hover:-translate-y-px hover:bg-[#111111]"
            >
              <LinkedInIcon />
            </a> */}
          </div>
        </div>
      </nav>

      <section
        className="relative border-b border-[#E2E2E2] bg-white px-0 pb-14 pt-[120px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,137,12,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(232,137,12,.06) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="relative z-[1] max-w-[680px]">
            <div className="mb-5 text-[14px] font-bold uppercase tracking-[.04em] text-[#E8890C]">
              Make Your Own
            </div>
            <h1 className="mb-[14px] text-[clamp(40px,5.5vw,68px)] font-black leading-none tracking-[-.02em] text-[#111111]">
              MYO <span className="text-[#E8890C]">AI Stack.</span>
            </h1>
            <p className="max-w-[560px] text-[16px] leading-[1.6] text-[#444444]">
              Star your favourites from Sarah&apos;s Toolkit and add your own.
              One easy place for all your AI tools to live.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-[14px]">
            <div className="min-w-[140px] flex-1 rounded-[14px] border border-[#E2E2E2] bg-white px-7 py-[18px] text-center shadow-[0_4px_16px_-8px_rgba(0,0,0,.08)]">
              <div className="mb-[6px] text-[36px] font-black leading-none text-[#E8890C]">
                {starredCount}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[.08em] text-[#777777]">
                Starred
              </div>
            </div>
            <div className="min-w-[140px] flex-1 rounded-[14px] border border-[#E2E2E2] bg-white px-7 py-[18px] text-center shadow-[0_4px_16px_-8px_rgba(0,0,0,.08)]">
              <div className="mb-[6px] text-[36px] font-black leading-none text-[#1D9E75]">
                {addedCount}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[.08em] text-[#777777]">
                Added by You
              </div>
            </div>
            <div className="min-w-[140px] flex-1 rounded-[14px] border border-[#E2E2E2] bg-white px-7 py-[18px] text-center shadow-[0_4px_16px_-8px_rgba(0,0,0,.08)]">
              <div className="mb-[6px] text-[36px] font-black leading-none text-[#004AAD]">
                {totalCount}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[.08em] text-[#777777]">
                Total Stack
              </div>
            </div>
            <a
              href="#spend"
              className="min-w-[140px] flex-1 cursor-pointer rounded-[14px] border border-[#E2E2E2] bg-white px-7 py-[18px] text-center shadow-[0_4px_16px_-8px_rgba(0,0,0,.08)] transition-all hover:-translate-y-0.5 hover:border-[#E8890C]"
            >
              <div className="mb-[6px] text-[36px] font-black leading-none text-[#E8890C]">
                {selectedCurrency.symbol}
                {Math.round(monthlyTotal)}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[.08em] text-[#777777]">
                Est. Spend /mo
              </div>
            </a>
          </div>
        </div>
      </section>

      <div className="sticky top-16 z-50 border-b border-[#E2E2E2] bg-[rgba(255,255,255,.97)] py-[18px] backdrop-blur-[12px]">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="flex items-center justify-between gap-[14px]">
            <div className="flex flex-1 gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {[
                { label: "All", count: totalCount },
                { label: "Sarah's Toolkit", count: starredCount },
                { label: "My Tools", count: addedCount },
                { label: "Core AI", count: coreAICount },
                { label: "Meetings & Productivity", count: 0 },
              ].map((pill) => (
                <button
                  key={pill.label}
                  onClick={() => setActiveFilter(pill.label)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-[13px] transition-all ${activeFilter === pill.label
                    ? "border-[#111111] bg-[#111111] text-white"
                    : "border-[#E2E2E2] bg-white text-[#444444] hover:border-[#E8890C] hover:text-[#E8890C]"
                    }`}
                >
                  {pill.label}
                  {pill.count > 0 && (
                    <span className="ml-1.5 opacity-60">{pill.count}</span>
                  )}
                </button>
              ))}
            </div>
            <div className="flex shrink-0 gap-2">
              <Link
                href="/upsell/build-your-own-ai-stack"
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-[#004AAD] bg-white px-4 py-2 text-[13px] font-semibold text-[#004AAD] transition hover:bg-[#004AAD] hover:text-white"
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
                </svg>
                Sarah&apos;s Toolkit
              </Link>
              <button
                onClick={openAddForm}
                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#E8890C] px-5 py-2 text-[13px] font-semibold text-white transition hover:bg-[#D47A0A]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
                Add Your Own
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#FAFAFA] px-0 pb-24 pt-12">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="grid grid-cols-1 gap-5 [@media(min-width:521px)]:grid-cols-2 [@media(min-width:781px)]:grid-cols-3 [@media(min-width:961px)]:grid-cols-4">
            {filteredTools.map((tool) => (
              <div
                key={tool.name}
                className="relative flex min-h-[340px] h-full flex-col rounded-2xl border border-[#E2E2E2] bg-white p-6 transition-all hover:-translate-y-[3px] hover:border-[#E8890C] hover:shadow-[0_16px_36px_-18px_rgba(232,137,12,.18)]"
              >
                <div className="mb-[14px] flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] border border-[#E2E2E2] bg-[#FAFAFA] p-1.5">
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${tool.favicon}&sz=128`}
                      alt={tool.name}
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-[18px] font-black leading-[1.15] text-[#111111]">
                      {tool.name}
                    </h3>
                    <div className="mt-0.5 text-[11px] leading-[1.2] tracking-[.02em] text-[#777777]">
                      {tool.maker}
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-1.5">
                    {tool.source === "you" && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const idx = filteredTools.indexOf(tool);
                          openEditForm(idx);
                        }}
                        className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[#E2E2E2] text-[#777777] transition-all hover:border-[#004AAD] hover:text-[#004AAD]"
                        aria-label="Edit"
                      >
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                    )}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleToolAction(tool.name);
                      }}
                      className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border transition-all ${tool.starred ? "border-[#E8890C] bg-[#E8890C] text-white" : tool.source === "you" ? "border-[#E8890C] text-[#E8890C] hover:bg-[#E8890C] hover:text-white" : "border-[#E2E2E2] text-[#777777] hover:border-[#E8890C] hover:text-[#E8890C]"}`}
                      aria-label={tool.starred ? "Starred" : "Remove"}
                    >
                      {tool.starred ? (
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-[13px] w-[13px]"
                        >
                          <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
                        </svg>
                      ) : (
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <span
                  className={`mb-2.5 inline-block w-fit rounded-full px-[9px] py-[3px] text-[10px] font-semibold uppercase tracking-[.06em] ${tool.tagClass ?? "bg-[#E6F1FB] text-[#004AAD]"}`}
                >
                  {tool.tag}
                </span>
                <p className="mb-4 min-h-20 flex-1 text-[13px] leading-[1.55] text-[#444444]">
                  {tool.desc}
                </p>
                <div className="mb-1.5 border-t border-[#E2E2E2] pt-[14px] text-[12px] leading-[1.4] text-[#777777]">
                  {tool.price}
                  {tool.plan && (
                    <strong className="mt-0.5 block font-semibold text-[#111111]">
                      {tool.plan}
                    </strong>
                  )}
                </div>
                <div className="mb-[14px] flex flex-wrap gap-1.5">
                  {tool.plan && (
                    <span className="rounded-md bg-[#FAFAFA] px-2.5 py-[3px] text-[11px] font-medium text-[#777777]">
                      {tool.plan.split(":")[0]}
                    </span>
                  )}
                  {tool.billing && (
                    <span
                      className={`rounded-md px-2.5 py-[3px] text-[11px] font-medium ${tool.billing === "Annual" ? "bg-[rgba(29,158,117,.12)] text-[#1D9E75]" : "bg-[#FAFAFA] text-[#777777]"}`}
                    >
                      {tool.billing}
                    </span>
                  )}
                  {tool.joined && (
                    <span className="rounded-md bg-[#FAFAFA] px-2.5 py-[3px] text-[10px] font-medium text-[#777777]">
                      Started: {tool.joined}
                    </span>
                  )}
                </div>
                <div className="mt-auto pt-2.5 text-[10px] italic text-[#777777]">
                  {tool.source === "toolkit" ? (
                    <span className="not-italic font-semibold text-[#004AAD]">
                      ★ Starred from Sarah&apos;s Toolkit
                    </span>
                  ) : (
                    <span className="not-italic font-semibold text-[#E8890C]">
                      + Added by you
                    </span>
                  )}
                </div>
              </div>
            ))}
            <div
              onClick={openAddForm}
              className="flex min-h-[340px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#E8890C] bg-[rgba(232,137,12,.03)] p-6 text-center transition-all hover:-translate-y-[3px] hover:bg-[rgba(232,137,12,.08)] hover:shadow-[0_16px_36px_-18px_rgba(232,137,12,.2)]"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#E8890C] text-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </div>
              <h3 className="mb-2 text-center text-[22px] font-black leading-[1.15] text-[#111111]">
                Add Your Own
              </h3>
              <p className="mx-auto max-w-[200px] text-center text-[13px] text-[#777777]">
                Track any AI tool you use. Add it to your stack.
              </p>
              <div className="mt-4">
                <span className="text-[11px] font-medium text-[#004AAD]">
                  or{" "}
                  <Link
                    href="/toolkit/cluster"
                    className="font-semibold underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    star from Sarah&apos;s Toolkit →
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="spend"
        className="border-b border-[#E2E2E2] bg-[#111111] px-0 py-14"
      >
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-2 text-[12px] font-bold uppercase tracking-[.14em] text-[#E8890C]">
                Track My Spend
              </div>
              <h2 className="text-[clamp(28px,3vw,36px)] font-black leading-[1.1] tracking-[-.01em] text-white">
                Your AI Stack Costs
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="cursor-pointer rounded-[10px] border border-[rgba(255,255,255,.2)] bg-[rgba(255,255,255,.1)] px-[14px] py-2.5 text-[13px] font-semibold text-[rgba(255,255,255,.9)] outline-none"
              >
                {Object.keys(EXCHANGE_RATES).map((c) => (
                  <option key={c} className="bg-white text-[#111111]" value={c}>
                    {c} {EXCHANGE_RATES[c].symbol}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex overflow-hidden rounded-2xl border border-[rgba(255,255,255,.1)] bg-[rgba(255,255,255,.06)] max-[780px]:flex-col">
            <div className="flex-1 px-7 py-6 text-center">
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-[rgba(255,255,255,.5)]">
                Tools
              </div>
              <div className="text-[28px] font-black leading-none text-white">
                {totalCount}
              </div>
            </div>
            <div className="h-[60px] w-px shrink-0 bg-[rgba(255,255,255,.1)] max-[780px]:mx-auto max-[780px]:h-px max-[780px]:w-[80%]" />
            <div className="flex-1 px-7 py-6 text-center">
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-[rgba(255,255,255,.5)]">
                Monthly
              </div>
              <div className="text-[28px] font-black leading-none text-white">
                {selectedCurrency.symbol}
                {monthlyTotal.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </div>
            </div>
            <div className="h-[60px] w-px shrink-0 bg-[rgba(255,255,255,.1)] max-[780px]:mx-auto max-[780px]:h-px max-[780px]:w-[80%]" />
            <div className="flex-1 px-7 py-6 text-center">
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-[rgba(255,255,255,.5)]">
                Yearly
              </div>
              <div className="text-[28px] font-black leading-none text-white">
                {selectedCurrency.symbol}
                {Math.round(yearlyTotal).toLocaleString()}
              </div>
            </div>
            <div className="h-[60px] w-px shrink-0 bg-[rgba(255,255,255,.1)] max-[780px]:mx-auto max-[780px]:h-px max-[780px]:w-[80%]" />
            <div className="flex-1 px-7 py-6 text-center">
              <div className="mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-[rgba(255,255,255,.5)]">
                Next Renewal
              </div>
              <div className="text-[18px] font-bold leading-none text-white">
                12 May 2026
              </div>
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            <button
              onClick={() => setTableOpen((p) => !p)}
              className="inline-flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,.15)] bg-transparent px-4 py-2 text-[12px] font-semibold text-[rgba(255,255,255,.6)] transition-all hover:border-[rgba(255,255,255,.4)] hover:text-white"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="3" y1="15" x2="21" y2="15" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
              View as table
            </button>
            <button
              onClick={handleDownloadCSV}
              className="inline-flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,.15)] bg-transparent px-4 py-2 text-[12px] font-semibold text-[rgba(255,255,255,.6)] transition-all hover:border-[rgba(255,255,255,.4)] hover:text-white"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CSV
            </button>
          </div>
          {tableOpen && (
            <div className="mt-5 overflow-x-auto">
              <table className="w-full border-collapse text-[13px] max-[780px]:text-[12px]">
                <thead>
                  <tr>
                    {[
                      "Tool",
                      "Plan",
                      "Billing",
                      "Cost",
                      "Joined",
                      "Next Renewal",
                    ].map((h) => (
                      <th
                        key={h}
                        className="border-b border-[rgba(255,255,255,.12)] px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-[.08em] text-[rgba(255,255,255,.5)]"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tools.map((tool, index) => (
                    <tr key={index}>
                      <td className="border-b border-[rgba(255,255,255,.08)] px-4 py-[14px] text-[rgba(255,255,255,.8)]">
                        <strong className="font-semibold text-white">
                          {tool.name}
                        </strong>
                      </td>
                      <td className="border-b border-[rgba(255,255,255,.08)] px-4 py-[14px] text-[rgba(255,255,255,.8)]">
                        {tool.plan?.split(":")[0] || tool.plan || "—"}
                      </td>
                      <td className="border-b border-[rgba(255,255,255,.08)] px-4 py-[14px] text-[rgba(255,255,255,.8)]">
                        {tool.billing || "—"}
                      </td>
                      <td className="border-b border-[rgba(255,255,255,.08)] px-4 py-[14px] text-[rgba(255,255,255,.8)]">
                        {tool.plan?.split(":")[1]?.trim() || tool.price || "—"}
                      </td>
                      <td className="border-b border-[rgba(255,255,255,.08)] px-4 py-[14px] text-[rgba(255,255,255,.8)]">
                        {tool.joined || "—"}
                      </td>
                      <td className="border-b border-[rgba(255,255,255,.08)] px-4 py-[14px] text-[rgba(255,255,255,.8)]">
                        {tool.renewal || "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3} className="px-4 pb-0 pt-4 text-white">
                      <strong>Total</strong>
                    </td>
                    <td className="px-4 pb-0 pt-4 text-white">
                      <strong>$70/mo</strong>
                    </td>
                    <td colSpan={2} />
                  </tr>
                </tfoot>
              </table>
            </div>
          )}
        </div>
      </section>

      <section className="border-b border-[#E2E2E2] bg-[#FAFAFA] px-0 pb-12">
        <div className="mx-auto max-w-[1280px] px-8">
          {/* <button
            onClick={() => setDevOpen((p) => !p)}
            className="mb-4 mt-0 inline-flex items-center gap-2 bg-transparent p-0 text-[13px] font-semibold text-[#004AAD]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
            Show developer reference
          </button> */}
          {devOpen && (
            <div className="rounded-2xl border-2 border-dashed border-[#E2E2E2] bg-white p-8">
              <h4 className="mb-2.5 text-[18px] font-black text-[#004AAD]">
                Developer Reference: Card Data Structure
              </h4>
              <p className="mb-4 text-[13px] leading-[1.6] text-[#777777]">
                Every card on the MYO AI Stack uses this exact structure,
                whether it was starred from Sarah&apos;s Toolkit or added by the
                user. Starred tools arrive pre-filled. User tools are entered
                via the Add form.
              </p>
              <div className="mb-4 overflow-x-auto rounded-xl bg-[#111111] p-6">
                <pre className="m-0 whitespace-pre text-[12px] leading-[1.7] text-[#E2E2E2]">{`{
  id:        "t_1714300000_abc1",       // auto-generated unique ID
  name:      "Notion",                  // REQUIRED: tool name
  cluster:   "meetings",               // dropdown: core | automate | build |
                                        //   content | meetings | business | other
  tag:       "Project Mgmt",           // type label shown on card
  useCase:   "Project management, wiki, // one-liner: what I use it for
              team docs",
  price:     "US$10",                   // free text: what they actually pay
  plan:      "Plus",                    // free text: Free, Starter, Pro, etc.
  billing:   "monthly",                // toggle: "monthly" | "annual"
  startDate: "2024-03-15",             // optional: ISO date string
  url:       "https://notion.so",      // optional: links out from card
  favicon:   "google.com/s2/favicons", // uses Google favicon API
  maker:     "Notion Labs",            // starred tools only, blank for user
  isCurated: false                     // true = starred from Sarah's Toolkit
}`}</pre>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#E6F1FB] px-3 py-1 text-[10px] font-semibold uppercase tracking-[.04em] text-[#004AAD]">
                  name = required
                </span>
                <span className="rounded-full bg-[#F0F0F0] px-3 py-1 text-[10px] font-semibold uppercase tracking-[.04em] text-[#777777]">
                  all other fields = optional
                </span>
                <span className="rounded-full bg-[rgba(29,158,117,.12)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[.04em] text-[#1D9E75]">
                  starred tools pre-fill from toolkit data
                </span>
                <span className="rounded-full bg-[rgba(232,137,12,.12)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[.04em] text-[#E8890C]">
                  user can override any starred field
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      <dialog
        ref={addFormRef}
        id="add-form"
        className="w-[90%] max-w-[520px] rounded-[20px] border-none bg-white p-0 shadow-[0_24px_60px_-12px_rgba(0,0,0,.25)] backdrop:bg-black/35"
      >
        <div className="p-8">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="m-0 text-[22px] font-black text-[#111111]">
                {editingIndex !== null ? "Edit Tool" : "Add a tool"}
              </h3>
              <p className="mt-1 text-[13px] text-[#777777]">
                {editingIndex !== null ? "Update your tool details" : "Track any AI tool you use"}
              </p>
            </div>
            <button
              onClick={closeAddForm}
              className="cursor-pointer border-none bg-transparent p-1 text-[#777777]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <form onSubmit={handleAddTool} className="flex flex-col gap-4">
            <div>
              <label className="mb-1.5 block text-[12px] font-bold text-[#444444]">
                Tool Name <span className="text-[#DC2626]">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Notion"
                className="w-full rounded-[10px] border border-[#E2E2E2] px-[14px] py-2.5 text-[14px] text-[#111111] outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1.5 block text-[12px] font-bold text-[#444444]">
                  Category
                </label>
                <select className="w-full rounded-[10px] border border-[#E2E2E2] bg-white px-[14px] py-2.5 text-[14px] text-[#111111] outline-none">
                  <option>Core AI</option>
                  <option>Automate & Save Time</option>
                  <option>Build & Launch</option>
                  <option>Create Content</option>
                  <option>Design & Presentation</option>
                  <option>Video & Media</option>
                  <option>Audio & Voice</option>
                  <option>Productivity & Business</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-[12px] font-bold text-[#444444]">
                  Type Tag
                </label>
                <input
                  type="text"
                  name="tag"
                  placeholder="e.g. CRM, Video, LLM"
                  className="w-full rounded-[10px] border border-[#E2E2E2] px-[14px] py-2.5 text-[14px] text-[#111111] outline-none"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-[12px] font-bold text-[#444444]">
                What I use it for
              </label>
              <input
                type="text"
                name="desc"
                placeholder="e.g. Project management, team docs"
                className="w-full rounded-[10px] border border-[#E2E2E2] px-[14px] py-2.5 text-[14px] text-[#111111] outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1.5 block text-[12px] font-bold text-[#444444]">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="e.g. US$10"
                  className="w-full rounded-[10px] border border-[#E2E2E2] px-[14px] py-2.5 text-[14px] text-[#111111] outline-none"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-[12px] font-bold text-[#444444]">
                  Plan
                </label>
                <input
                  type="text"
                  name="plan"
                  placeholder="e.g. Pro, Free"
                  className="w-full rounded-[10px] border border-[#E2E2E2] px-[14px] py-2.5 text-[14px] text-[#111111] outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1.5 block text-[12px] font-bold text-[#444444]">
                  Billing
                </label>
                <div className="flex overflow-hidden rounded-[10px] border border-[#E2E2E2]">
                  <button
                    type="button"
                    onClick={() => setBillingType("Monthly")}
                    className={`flex-1 border-none py-2.5 text-[13px] font-semibold transition-all ${billingType === "Monthly" ? "bg-[#E8890C] text-white" : "bg-white text-[#777777]"}`}
                  >
                    Monthly
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingType("Annual")}
                    className={`flex-1 border-none py-2.5 text-[13px] font-semibold transition-all ${billingType === "Annual" ? "bg-[#E8890C] text-white" : "bg-white text-[#777777]"}`}
                  >
                    Annual
                  </button>
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-[12px] font-bold text-[#444444]">
                  Start Date{" "}
                  <span className="font-normal text-[#777777]">(optional)</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full rounded-[10px] border border-[#E2E2E2] px-[14px] py-2.5 text-[14px] text-[#111111] outline-none"
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-[12px] font-bold text-[#444444]">
                Website URL{" "}
                <span className="font-normal text-[#777777]">(optional)</span>
              </label>
              <input
                type="text"
                name="url"
                placeholder="e.g. https://notion.so"
                className="w-full rounded-[10px] border border-[#E2E2E2] px-[14px] py-2.5 text-[14px] text-[#111111] outline-none"
              />
            </div>
            <div className="mt-7 flex gap-3">
              <button
                type="button"
                onClick={closeAddForm}
                className="flex-1 rounded-full border-[1.5px] border-[#111111] bg-transparent px-7 py-3.5 text-[14px] font-semibold text-[#111111] transition hover:bg-[#111111] hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-[2] rounded-full bg-[#E8890C] px-7 py-3.5 text-[14px] font-semibold text-white transition hover:bg-[#D47A0A]"
              >
                {editingIndex !== null ? "Save Changes" : "Add to My Stack"}
              </button>
            </div>
          </form>
        </div>
      </dialog>

      <footer className="bg-[#111111] px-0 pb-8 pt-[72px] text-white">
        <div className="mx-auto max-w-[1280px] px-8">
          <div className="mb-14 grid grid-cols-1 gap-12 [@media(min-width:861px)]:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <Link href="/" className="mb-5 block w-40 text-white">
                <LogoSVG />
              </Link>
              <p className="max-w-[320px] text-[14px] leading-[1.65] text-[rgba(255,255,255,.65)]">
                AI trainer, strategist and consultant. Building AI platforms
                including parently.ai and aieconomy.ai. Cutting through the AI
                chaos so you can focus on what matters.
              </p>
            </div>
            <div>
              <h4 className="mb-[18px] text-[12px] font-bold uppercase tracking-[.14em] text-white">
                Toolkit
              </h4>
              <ul className="list-none">
                <li className="mb-2.5">
                  <Link
                    href="/llm-comparison"
                    className="text-[14px] text-[rgba(255,255,255,.7)] hover:text-white"
                  >
                    LLM Comparison
                  </Link>
                </li>
                <li className="mb-2.5">
                  <Link
                    href="/toolkit/cluster"
                    className="text-[14px] text-[rgba(255,255,255,.7)] hover:text-white"
                  >
                    All Tools
                  </Link>
                </li>
                <li className="mb-2.5">
                  <Link
                    href="/ai-tips"
                    className="text-[14px] text-[rgba(255,255,255,.7)] hover:text-white"
                  >
                    AI Tips
                  </Link>
                </li>
                <li className="mb-2.5">
                  <Link
                    href="/myo-ai-stack"
                    className="text-[14px] text-[rgba(255,255,255,.7)] hover:text-white"
                  >
                    MYO AI Stack
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-[18px] text-[12px] font-bold uppercase tracking-[.14em] text-white">
                Learn
              </h4>
              <ul className="list-none">
                <li className="mb-2.5">
                  <Link
                    href="/toolkit/claude"
                    className="text-[14px] text-[rgba(255,255,255,.7)] hover:text-white"
                  >
                    Claude Deep Dive
                  </Link>
                </li>
                <li className="mb-2.5">
                  <Link
                    href="/toolkit/chatgpt"
                    className="text-[14px] text-[rgba(255,255,255,.7)] hover:text-white"
                  >
                    ChatGPT Deep Dive
                  </Link>
                </li>
                <li className="mb-2.5">
                  <Link
                    href="/toolkit/perplexity"
                    className="text-[14px] text-[rgba(255,255,255,.7)] hover:text-white"
                  >
                    Perplexity Deep Dive
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-[18px] text-[12px] font-bold uppercase tracking-[.14em] text-white">
                Company
              </h4>
              <ul className="list-none">
                <li className="mb-2.5">
                  <Link
                    href="/about"
                    className="text-[14px] text-[rgba(255,255,255,.7)] hover:text-white"
                  >
                    About
                  </Link>
                </li>
                <li className="mb-2.5">
                  <Link
                    href="https://crm.njin.co/v2/preview/yTdqai0KZBydaY5Rn5Ma"
                    className="text-[14px] text-[rgba(255,255,255,.7)] hover:text-white"
                  >
                    Ask Sarah
                  </Link>
                </li>
                <li className="mb-2.5">
                  <Link
                    href="/privacy"
                    className="text-[14px] text-[rgba(255,255,255,.7)] hover:text-white"
                  >
                    Privacy &amp; Data
                  </Link>
                </li>
                <li className="mb-2.5">
                  <Link
                    href="https://crm.njin.co/v2/preview/RCTNn7OLMk3eTXmDkRtG"
                    className="text-[14px] text-[rgba(255,255,255,.7)] hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[rgba(255,255,255,.12)] pt-7 text-[12px] text-[rgba(255,255,255,.5)]">
            <div>© 2026 AI Economy. ABN: 24 602 295 698.</div>
            <div>MYO AI Stack · Make Your Own</div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@700;900&family=Poppins:wght@300;400;500;600;700&display=swap");
        * {
          box-sizing: border-box;
        }
        body {
          font-family: "Poppins", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        h1,
        h2,
        h3,
        h4 {
          font-family: "DM Sans", sans-serif;
          letter-spacing: -0.01em;
        }
      `}</style>
    </div>
  );
}
