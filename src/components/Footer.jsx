export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-400">
          © {new Date().getFullYear()} Kushagra Varshney. Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
