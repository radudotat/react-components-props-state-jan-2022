export default function ReactAntipatterns() {
  return (
    <div>
      <div>
        Don't use document.querySelector (open file and read code for more info)
        <button
          onClick={() => {
            // BIG NO NO PLEASE USE STATE (useState hook)
            // const div = document.querySelector('.myDiv');
            // div.innerText = Karl
          }}
        >
          click me
        </button>
      </div>
    </div>
  );
}
