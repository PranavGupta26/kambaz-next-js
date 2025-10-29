"use client";

import { useState } from "react";

export default function EventObject() {
  // Define a type for the serialized event
  type SafeEvent = {
    type: string;
    nativeEvent: { isTrusted: boolean };
    target: string;
    currentTarget: string | null;
    eventPhase: number;
    bubbles: boolean;
    cancelable: boolean;
    timeStamp: number;
    defaultPrevented: boolean;
    isTrusted: boolean;
    detail: number;
    screenX: number;
    screenY: number;
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    ctrlKey: boolean;
    shiftKey: boolean;
    altKey: boolean;
    metaKey: boolean;
    button: number;
    buttons: number;
    relatedTarget: EventTarget | null;
    movementX: number;
    movementY: number;
  };

  const [eventData, setEventData] = useState<SafeEvent | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const safeEvent: SafeEvent = {
      type: e.type,
      nativeEvent: { isTrusted: e.nativeEvent.isTrusted },
      target: e.target instanceof HTMLElement ? e.target.outerHTML : "",
      currentTarget: e.currentTarget instanceof HTMLElement ? e.currentTarget.outerHTML : null,
      eventPhase: e.eventPhase,
      bubbles: e.bubbles,
      cancelable: e.cancelable,
      timeStamp: e.timeStamp,
      defaultPrevented: e.defaultPrevented,
      isTrusted: e.isTrusted,
      detail: e.detail,
      screenX: e.screenX,
      screenY: e.screenY,
      clientX: e.clientX,
      clientY: e.clientY,
      pageX: e.pageX,
      pageY: e.pageY,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
      altKey: e.altKey,
      metaKey: e.metaKey,
      button: e.button,
      buttons: e.buttons,
      relatedTarget: e.relatedTarget,
      movementX: e.movementX,
      movementY: e.movementY,
    };

    setEventData(safeEvent);
  };

  return (
    <div>
      <h2>Event Object</h2>
      <button
        onClick={handleClick}
        className="btn btn-primary"
        id="wd-display-event-obj-click"
      >
        Display Event Object
      </button>
      <pre>{JSON.stringify(eventData, null, 2)}</pre>
      <hr />
    </div>
  );
}
