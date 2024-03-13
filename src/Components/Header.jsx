export default function Header(){

    return(
    <header>
        <nav class="navbar">
            <div class="navbar-header">
                <img src="src/images/magicat.png" alt="logo" id="image">
                <div class="logo">Magicats.com</div>
            </div>
    
            <div class="container">
                <div class="search-container">
                  <form action="#" method="get">
                    <input type="text" placeholder="Pesquisar..." name="search">
                    <button type="submit">Buscar</button>
                  </form>
                </div>
              </div>

            <ul class="menu" id="menu">
                <li><a href="#">Início</a></li>
                <li><a href="#">Minha Conta</a></li>
                <li><a href="#">Sobre Nós</a></li>
            </ul>
        </nav>
    </header>
    );
}
