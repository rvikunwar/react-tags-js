import React, { useState } from "react";
import ReactInputTags from "../src";
import { TagInterface } from "../src/ReactInputTags";
import "./index.css";

function addReadOnlyToTags(tag: TagInterface): Boolean {
  if (typeof tag.value === "string" && tag.value.startsWith("t")) {
    return true;
  }
  return false;
}

export default function () {
  const [tags, setTags] = useState<TagInterface[]>([
    { label: "Happy", value: "happy" },
    // { label: "Sad", value: "sad" },
    { label: "Excited", value: "excited" },
    { label: "Angry", value: "angry" },
    // { label: "Surprised", value: "surprised" },
    { label: "Content", value: "content" },
    { label: "Inspired", value: "inspired" },
    // { label: "Nervous", value: "nervous" },
    { label: "Relaxed", value: "relaxed" },
  ]);
  const onChange = (newTags: TagInterface[], newTag?: TagInterface) => {
    console.log(newTags);
    if (newTag) {
      const isTrue = addReadOnlyToTags(newTag);
      if (isTrue) {
        const tagIndex = newTags.findIndex((tag_) => tag_.value === newTag.value);
        newTags[tagIndex].readOnly = true;
      }
    }
    setTags(newTags);
  };

  const options = [
    { label: "Happy", value: "happy" },
    { label: "Sad", value: "sad" },
    { label: "Excited", value: "excited" },
    { label: "Angry", value: "angry" },
    { label: "Surprised", value: "surprised" },
    { label: "Bored", value: "bored" },
    { label: "Confused", value: "confused" },
    { label: "Anxious", value: "anxious" },
    { label: "Content", value: "content" },
    { label: "Curious", value: "curious" },
    { label: "Frustrated", value: "frustrated" },
    { label: "Hopeful", value: "hopeful" },
    { label: "Inspired", value: "inspired" },
    { label: "Nervous", value: "nervous" },
    { label: "Relaxed", value: "relaxed" },
    { label: "Lonely", value: "lonely" },
    { label: "Jealous", value: "jealous" },
    { label: "Proud", value: "proud" },
    { label: "Shy", value: "shy" },
    { label: "Grateful", value: "grateful" },
  ];

  return (
    <div className="example-container">
      <ReactInputTags
        tags={tags}
        onChange={onChange}
        options={options}
        creatable={true}
        style={{
          mainContainer: "main-container-1",
          tag: "tag-1",
          input: "input-1",
          optionContainer: "option-container",
          option: "option",
          selectedOption: "selected-option",
        }}
      />
    </div>
  );
}
