function Button(props) {
  return (
    <button
      className="font-semibold bg-amber-400 bg-opacity-50 w-fit px-4 py-2 rounded-md shadow justify-self-end mr-10 cursor-pointer transition-[colors, shadow] ease-in duration-200 hover:bg-amber-500 hover:shadow-amber-500"
      {...props}
    >
      {props.children}
    </button>
  );
}

export default Button;
