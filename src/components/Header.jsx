export default function Header() {
   return (
      <header className="p-4 flex items-center gap-4 justify-between capitalize text-lg sticky top-0 bg-surface z-50">
         <a href="/">anshumat</a>
         <nav className="flex items-center gap-4 text-on-surface/60 **:hover:text-on-surface **:transition-colors">
            <a href="/">our mission</a>
            <a href="/">contact</a>
         </nav>
      </header>
   );
}
