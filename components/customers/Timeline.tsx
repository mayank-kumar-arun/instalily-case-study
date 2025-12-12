export default function Timeline({ timeline }: { timeline: any[] }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <h3 className="font-semibold mb-3">Interaction Timeline</h3>

      <ul className="space-y-4">
        {timeline.map((t, i) => (
          <li key={i} className="border-l-2 border-blue-500 pl-4">
            <p className="text-sm font-medium">
              {t.type} • {t.actor}
            </p>
            <p className="text-sm text-gray-600">{t.text}</p>
            <p className="text-xs text-gray-400">{t.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
