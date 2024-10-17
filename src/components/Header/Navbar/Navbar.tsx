import Link from "next/link";

interface INavbarData{
    name:string,
    url:string,
}
export default function Navba():React.ReactNode{
    const navbarData: INavbarData[] = [
        {name: "Home", url: "/"},
        {name: "About", url: "/about"},
        {name: "Projects", url: "/projects"},
        {name: "Contact", url: "/contact"},
    ]
    return(
        <div>
            <div className="nav-menu">
                {navbarData.length > 0 ? navbarData.map((item:INavbarData)=>(
                    <Link href={item.url} key={item.name} style={{textDecoration: "none", color: "var(--paragraph-color)"}}>{item.name}</Link>
                )): <p>There are not data menu...</p>}
            </div>
        </div>
    )
}