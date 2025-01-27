import S from "./styles/Button.module.css"

export function Button({ targetId, buttonContent }) {
  const handleScroll = () => {
    const target = document.getElementById(targetId); 
    if (target) {
      target.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
    <button 
        onClick={handleScroll}
        className={S.button}
    >
      {buttonContent} 
    </button>
  );
}

