// untuk menampilkan halaman authentikasi
import { Routes, Route } from "react-router-dom";
import routes from "@/routes";

export function Auth() {
  return (
    <div className="relative min-h-screen w-full">
      <Routes>
        {routes.map( //membuat elemen Route u/ setiap rute halaman
          ({ layout, pages }) =>
            layout === "auth" &&
            pages.map(({ path, element }) => (
              <Route exact path={path} element={element} />
            ))
        )}
      </Routes>
      <div className="container absolute bottom-8 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
      </div>
    </div>
  );
}

Auth.displayName = "/src/layout/Auth.jsx"; // u/ debugging dan memudahkan pencarian kode

export default Auth;
