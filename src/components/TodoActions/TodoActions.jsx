import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button.jsx";

function TodoActions({ resetTodos, deleteCompletedTodos }) {
	return (
		<div>
			<Button onClick={resetTodos} title="Reset Todos">
				<RiRefreshLine />
			</Button>
			<Button
				onClick={deleteCompletedTodos}
				title="Clear Completed Todos"
			>
				<RiDeleteBin2Line />
			</Button>
		</div>
	);
}

export default TodoActions;
