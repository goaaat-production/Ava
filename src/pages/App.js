import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import Page1 from "./Page1";
import DragAndDrop from "./dragAndDrop";

function App() {

    return (
        <>
            <DndProvider backend={HTML5Backend}>
                <DragAndDrop />
            </DndProvider>

        </>
    )
}

export default App;
