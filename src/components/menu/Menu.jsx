import "./menu.scss"

export default function ({menuOpen, setMenuOpen}) {

    const openInNewTab = (url) => {
        setMenuOpen(false)
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
        
    }
      
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#aboutme">About me</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#works">Works</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#photoshop">Photoshop</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contact">Contact</a>
            </li>
            <li onClick={()=>openInNewTab('https://drive.google.com/file/d/1L0W2Ss390_Jc9biC70AHAfM22J5ge4Ni/view?usp=sharing')}>
                <p>Curriculum Vitae</p>
            </li>
        </ul>
    </div>
  )
}
