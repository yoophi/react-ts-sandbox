import "./GithubUsernameForm.css";

import { ChangeEvent, FormEvent, useState } from "react";

type GithubUsernameFormProps = {
  onSubmitUsername: (username: string) => void;
};
function GithubUsernameForm({ onSubmitUsername }: GithubUsernameFormProps) {
  const [input, setInput] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmitUsername(input);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form className="GithubUsernameForm" onSubmit={onSubmit}>
      <input onChange={onChange} value={input} placeholder="Github Username" />
      <button type="submit">Search</button>
    </form>
  );
}

export default GithubUsernameForm;
