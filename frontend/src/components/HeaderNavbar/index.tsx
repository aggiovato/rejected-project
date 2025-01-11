const HeaderNavbar = () => (
  <header className="bg-primary-800 text-accent-100 shadow-md">
    <div className="flex items-center justify-between p-4">
      {/* Sección izquierda: Logo y título */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center text-dark-900 font-bold">
          TM
        </div>
        <h1 className="font-bold text-2xl">Ticket Manager</h1>
      </div>

      {/* Sección derecha: Navbar y botón */}
      <div className="flex items-center space-x-6">
        {/* Navbar */}
        <nav>
          <ul className="flex space-x-6">
            <li className="font-semibold hover:text-accent-300 transition">
              Rejected
            </li>
            <li className="font-semibold hover:text-accent-300 transition">
              Processed
            </li>
            <li className="font-semibold hover:text-accent-300 transition">
              Reports
            </li>
          </ul>
        </nav>
        {/* Botón de Menú */}
        <button className="p-2 px-4 bg-primary-400 text-lightGray-100 rounded-md hover:bg-primary-200 hover:text-dark-900 transition">
          Menu
        </button>
      </div>
    </div>
  </header>
);

export default HeaderNavbar;
