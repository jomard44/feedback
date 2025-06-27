import "./nav.css"

function Nav(){
 
    return (
        <nav >
            <div className="logo">
                <img width={60} height={60} src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.citypng.com%2Fphoto%2F21688%2Fdownload-hd-green-dot-circle-icon-png&psig=AOvVaw1IjOeCXj_TGJPvZODIv00r&ust=1751053794254000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPCP3-_tj44DFQAAAAAdAAAAABAE" alt="" />
            </div>
            <div className="btn">
                <button><a href='/'>Create New</a></button>
            </div>
            <div className="nav-links">
            <ul>
                <li><a href="/">dashboard</a></li>
                <li><a href="/about">settings</a></li>
                <li><a href="/contact">logout</a></li>
            </ul>
            </div>
        </nav>
    );
}
export default Nav;