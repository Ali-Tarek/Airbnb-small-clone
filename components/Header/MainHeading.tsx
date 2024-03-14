export default function MainHeading({ title }: { title: string }) {
  return (
    <div>
      <h2 className="text-4xl font-semibold mb-5">{title}</h2>
    </div>
  );
}
