function Li(props) {
  return (
    <li className="transition-colors ease-in duration-200 cursor-pointer hover:text-white">
      {props.children}
    </li>
  );
}

export default Li;
