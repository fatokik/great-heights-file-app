"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header>
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold">Welcome User</h1>
        </div>
      </header>
      <main className="container mx-auto mt-6">
        <h2 className="text-l font-semibold">
          Select an item from the menu to get started.
        </h2>
      </main>
    </div>
  );
}
