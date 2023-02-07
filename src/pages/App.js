import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import Page1 from "./Page1";
import DragAndDrop from "./dragAndDrop";

function App() {

    return (
        <>
            <DndProvider backend={TouchBackend} >
                <DragAndDrop />
            </DndProvider>

        </>
    )
}

export default App;
