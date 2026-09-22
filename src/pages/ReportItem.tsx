import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CloudUpload,
  Hand,
  Info,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

type ReportType = "lost" | "found";

export default function ReportItem() {
  const [reportType, setReportType] = useState<ReportType>("lost");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setImage(file);

    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Backend submission will be connected here later.
    console.log({
      reportType,
      image,
    });
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Page header */}
      {/* <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-16 max-w-[940px] items-center justify-between px-5 sm:px-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-900"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <span className="text-sm">⌕</span>
            </span>

            <span className="text-base font-bold tracking-tight">
              FindMe
            </span>
          </Link>

          <Link
            to="/browse"
            className="text-xs font-semibold text-blue-600 transition hover:text-blue-700"
          >
            Browse items
          </Link>
        </div>
      </header> */}

      <div className="mx-auto max-w-[660px] px-5 py-8 sm:px-6 lg:py-9">
        {/* Back */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition hover:text-slate-800"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>

        {/* Introduction */}
        <div className="mt-7">
          <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-blue-600">
            New report
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Help an item find its way.
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Start with the basics. You can add more detail when you're ready.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          {/* ------------------------------------------------ */}
          {/* STEP 1 */}
          {/* ------------------------------------------------ */}

          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-start gap-3">
              <StepNumber number="1" />

              <div>
                <h2 className="text-sm font-bold text-slate-800">
                  What are you reporting?
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Choose the situation that best fits.
                </p>
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {/* Lost */}
              <button
                type="button"
                onClick={() => setReportType("lost")}
                className={`rounded-xl border p-4 text-left transition ${
                  reportType === "lost"
                    ? "border-2 border-blue-600 bg-blue-50"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    reportType === "lost"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  <Info size={17} />
                </div>

                <h3 className="mt-4 text-sm font-bold text-slate-800">
                  I lost something
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  I'm trying to reconnect with an item I misplaced.
                </p>

                {reportType === "lost" && (
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-blue-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    Selected
                  </div>
                )}
              </button>

              {/* Found */}
              <button
                type="button"
                onClick={() => setReportType("found")}
                className={`rounded-xl border p-4 text-left transition ${
                  reportType === "found"
                    ? "border-2 border-blue-600 bg-blue-50"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div
                  className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    reportType === "found"
                      ? "bg-blue-600 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  <Hand size={17} />
                </div>

                <h3 className="mt-4 text-sm font-bold text-slate-800">
                  I found something
                </h3>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  I want to help return an item to its owner.
                </p>

                {reportType === "found" && (
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] font-bold text-blue-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                    Selected
                  </div>
                )}
              </button>
            </div>
          </section>

          {/* ------------------------------------------------ */}
          {/* STEP 2 */}
          {/* ------------------------------------------------ */}

          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-start gap-3">
              <StepNumber number="2" />

              <div>
                <h2 className="text-sm font-bold text-slate-800">
                  Tell us about the item
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Clear details help the right person recognize it.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <FormField label="Item name">
                <input
                  name="itemName"
                  type="text"
                  placeholder="e.g. Silver water bottle"
                  required
                  className={inputClass}
                />
              </FormField>

              <FormField label="Category">
                <select
                  name="category"
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option>Electronics</option>
                  <option>Personal items</option>
                  <option>Bags</option>
                  <option>Keys</option>
                  <option>Accessories</option>
                  <option>Clothing</option>
                  <option>Documents</option>
                  <option>Other</option>
                </select>
              </FormField>
            </div>

            <div className="mt-4">
              <FormField label="Description">
                <textarea
                  name="description"
                  rows={4}
                  placeholder="Color, brand, identifying details, or anything else that may help."
                  required
                  className={`${inputClass} resize-none`}
                />
              </FormField>

              <p className="mt-1.5 text-[10px] text-slate-400">
                Avoid putting sensitive personal information in your report.
              </p>
            </div>
          </section>

          {/* ------------------------------------------------ */}
          {/* STEP 3 */}
          {/* ------------------------------------------------ */}

          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-start gap-3">
              <StepNumber number="3" />

              <div>
                <h2 className="text-sm font-bold text-slate-800">
                  Where and when?
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Approximate details are completely fine.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <FormField label="Last seen at">
                <select
                  name="location"
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select a campus location
                  </option>
                  <option>Library, Level 2</option>
                  <option>Science Quad</option>
                  <option>Student Union</option>
                  <option>East Residence</option>
                  <option>Campus Café</option>
                  <option>Arts Building</option>
                  <option>Sports Centre</option>
                  <option>Other</option>
                </select>
              </FormField>

              <FormField label="Date">
                <input
                  name="date"
                  type="date"
                  required
                  className={inputClass}
                />
              </FormField>
            </div>

            {/* Upload */}
            <div className="mt-5">
              <label className="block text-xs font-semibold text-slate-700">
                Add a photo
              </label>

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="mt-2 flex min-h-[100px] w-full flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 px-5 py-5 text-center transition hover:border-blue-400 hover:bg-blue-50"
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Selected item"
                    className="h-24 w-32 rounded-lg object-cover"
                  />
                ) : (
                  <>
                    <CloudUpload
                      size={22}
                      className="text-blue-600"
                    />

                    <span className="mt-2 text-xs font-semibold text-slate-700">
                      Drop an image here or browse
                    </span>

                    <span className="mt-1 text-[10px] text-slate-400">
                      JPG or PNG · up to 10MB
                    </span>
                  </>
                )}
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg"
                onChange={handleImageChange}
                className="hidden"
              />

              {image && (
                <p className="mt-2 text-[10px] text-slate-500">
                  Selected: {image.name}
                </p>
              )}
            </div>

            {/* Additional details */}
            <div className="mt-5">
              <FormField
                label={
                  <>
                    Additional details{" "}
                    <span className="font-normal text-slate-400">
                      (optional)
                    </span>
                  </>
                }
              >
                <input
                  name="additionalDetails"
                  type="text"
                  placeholder="e.g. I can identify a small sticker on the bottom"
                  className={inputClass}
                />
              </FormField>
            </div>
          </section>

          {/* Submit row */}
          <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck
                size={14}
                className="text-blue-600"
              />

              Reports are visible to the campus community.
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
            >
              Submit report
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Success / information card */}
          <div className="flex items-start gap-3 rounded-xl border border-emerald-500 bg-white p-4">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white">
              <Check size={14} />
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-800">
                Ready to submit
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Once submitted, FindMe will surface relevant potential
                matches in your dashboard.
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}

/* ------------------------------------------------ */
/* Reusable pieces                                  */
/* ------------------------------------------------ */

function StepNumber({ number }: { number: string }) {
  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
      {number}
    </div>
  );
}

function FormField({
  label,
  children,
}: {
  label: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold text-slate-700">
        {label}
      </span>

      {children}
    </label>
  );
}

const inputClass =
  "h-10 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 text-xs text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100";