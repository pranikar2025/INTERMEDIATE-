function TaskCard(props) {
  return (
    <div className="bg-white p-5 rounded-lg shadow">
      <h2 className="text-lg font-bold">
        {props.title}
      </h2>

      <p className="text-2xl font-bold text-blue-700">
        {props.value}
      </p>
    </div>
  );
}

export default TaskCard;