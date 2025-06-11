import React, { useState } from "react";
import style from "./PersonCard.module.css";
import useAxios from "../hooks/useAxios";

const PersonCard = (props) => {
  const { get, post, patch } = useAxios();

  const [isEditing, setIsEditing] = useState(false);
  const [editObject, setEditObject] = useState({ ...props });
  const [message, setMessage] = useState("");

  //Just calculate Years Worked Function
  const calculateWorkedYears = (date) => {
    let presentDate = new Date().getFullYear();
    let givenDate = new Date(date).getFullYear();
    let workedDuration = presentDate - givenDate;
    if (workedDuration == 5 || workedDuration == 10 || workedDuration == 15) {
      return workedDuration + " Years " + "🎉 Schedule recognition meeting.";
    } else if (workedDuration > 1) {
      return workedDuration + " Years";
    } else {
      let presentDate = new Date().getMonth();
      let givenDate = new Date(date).getMonth();
      let workedDuration = presentDate - givenDate;
      workedDuration =
        workedDuration < 0 ? -1 * workedDuration : workedDuration;
      if (workedDuration < 6) {
        return workedDuration + " Months " + "🔔 Schedule Probation review.";
      } else {
        return workedDuration + " Months";
      }
    }
  };
  //Edit function starts from here
  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const cancelEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const updateField = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setEditObject((prev) => ({
      ...prev,
      [name]:
        name == "salary"
          ? Number(value)
          : name == "location"
          ? String(value)
          : name == "department"
          ? String(value)
          : name == "skills"
          ? value.split(",")
          : value,
    }));
  };

  const saveEdit = () => {
    patch(editObject, props.id);
    setIsEditing((prev) => !prev);
    setMessage("Updated data saved!!");
    setTimeout(() => setMessage(""), 3000);
  };
  let animal = props.animal.toLowerCase();
  const animalEmojis = {
    lion: "🦁",
    wolf: "🐺",
    eagle: "🦅",
    tiger: "🐯",
    fox: "🦊",
    bear: "🐻",
    owl: "🦉",
    cat: "🐱",
    dog: "🐶",
    elephant: "🐘",
    dolphin: "🐬",
    horse: "🐴",
    rabbit: "🐰",
    panda: "🐼",
    snake: "🐍",
  };
  let emoji = animalEmojis[animal] || "🚫";

  return (
    <div className={style.person}>
      {isEditing ? (
        <>
          <p>
            <strong>Name: </strong>
            {props.name}
          </p>
          <p>
            <strong>Title: </strong>
            {props.title}
          </p>
          <p>
            <label htmlFor="department">
              <strong>Department: </strong>
            </label>
            <input
              type="text"
              name="department"
              id="department"
              value={editObject.department}
              onChange={updateField}
            />
          </p>
          <p>
            <label htmlFor="salary">
              <strong>Location: </strong>
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={editObject.location}
              onChange={updateField}
            />
          </p>
          <p>
            <label htmlFor="salary">
              <strong>Salary: </strong>
            </label>
            <input
              type="number"
              name="salary"
              id="salary"
              value={editObject.salary}
              onChange={updateField}
            />
          </p>
          <p>
            <strong>Phone: </strong>
            {props.phone}
          </p>
          <p>
            <strong>Email: </strong>
            {props.email}
          </p>
          <p>
            <strong>Year Worked: </strong>
            {calculateWorkedYears(props.startDate)}
          </p>
          <p>
            <strong>animal: </strong>
            {props.animal}
            {props.animal && emoji}
          </p>
          <p>
            <label htmlFor="skills">
              <strong>Skills: </strong>
            </label>
            <input
              type="text"
              name="skills"
              id="skills"
              value={editObject.skills}
              onChange={updateField}
            />
          </p>
          <button onClick={saveEdit}>Save</button>
          <button onClick={cancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <span className={style["update-message"]}>{message}</span>
          <p>
            <strong>Name: </strong>
            {editObject.name}
          </p>
          <p>
            <strong>Title: </strong>
            {editObject.title}
          </p>
          <p>
            <strong>Department: </strong>
            {editObject.department}
          </p>
          <p>
            <strong>Location: </strong>
            {editObject.location}
          </p>
          <p>
            <strong>Salary: </strong>
            {editObject.salary}
          </p>
          <p>
            <strong>Phone: </strong>
            {editObject.phone}
          </p>
          <p>
            <strong>Email: </strong>
            {editObject.email}
          </p>
          <p>
            <strong>Year Worked: </strong>
            {calculateWorkedYears(editObject.startDate)}
          </p>
          <p>
            <strong>animal: </strong>
            {editObject.animal}
            {props.animal && emoji}
          </p>
          <p>
            <strong>Skills: </strong>
            {editObject.skills.join(", ")}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default PersonCard;
