import { Alert, AlertDescription, AlertTitle, Button } from "@optiaxiom/react";
import { useState } from "react";

export function App() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {open && (
        <Alert onClose={() => setOpen(false)}>
          <AlertTitle>Some action is not permitted</AlertTitle>
          <AlertDescription>
            You do not have the required permissions to perform this action.
          </AlertDescription>
        </Alert>
      )}

      {!open && <Button onClick={() => setOpen(true)}>Show alert</Button>}
    </>
  );
}