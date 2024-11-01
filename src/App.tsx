import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  let items = ["NewYork", "san Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>
      <div>
        <Alert onClose={() => console.log("alert close clicked")}>
          hello<span> good</span> world
        </Alert>
      </div>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>my Alert</Alert>
        )}
        <Button
          text="bootstrap1"
          onClick={() => setAlertVisible(true)}
          color="danger"
        />
        <Button
          text="bootstrap2"
          onClick={() => setAlertVisible(true)}
          color="primary"
        />
      </div>
    </>
  );
}

export default App;
