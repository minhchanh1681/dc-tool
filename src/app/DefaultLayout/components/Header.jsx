"use client";
export default function Header() {
  return (
    <main className="bg-secondary-subtle shadow-sm bg-body-tertiary rounded">
      <div className="container  d-flex justify-content-between align-items-center ">
        <div className="d-flex align-items-center">
          <img src="https://fakeimg.pl/150x40?text=DC+TOOL&font=bebas" alt="DC Tool" />
        </div>
        <div className="text-center">
          <button className="btn btn-primary btn-sm">Login With Google</button>
        </div>
      </div>
    </main>
  );
}
