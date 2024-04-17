import { useState } from "react";
import "./draggableDiv.scss";

export type DraggableDivProps = {
    initialLocation: Location
};

export type Location = {
    x: number,
    y: number,
}

export const DraggableDiv = (props: DraggableDivProps) => {

    const [localLocation, setLocalLocation] = useState<Location>(props.initialLocation);

    const dragStartHandler = (e: React.DragEvent) => {
        console.log(e);
    }

    const dragEndHandler = (e: React.DragEvent) => {
        setLocalLocation({ x: e.clientX, y: e.clientY });

    }

    return (
        <div className={'draggableDiv'} style={{
            top: localLocation.y, left: localLocation.x

        }}>
            <div className="title">
                <div
                    className="handle"
                    onDragStart={dragStartHandler}
                    onDragEnd={dragEndHandler}
                    draggable={true}
                >
                    H
                </div>
                <div>
                    Title
                </div>
            </div>
            <div className="content">Content</div>
        </div>
    );
}