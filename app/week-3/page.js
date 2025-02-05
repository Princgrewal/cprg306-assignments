import ItemList from "./item-list";

export default function Page() {
    return (
        <main className="bg-slate-900">
        <h1 className="text-3xl font-bold">Shopping List</h1>
        <ItemList />
        </main>
    );
}