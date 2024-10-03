import PropTypes from "prop-types";

export function Component2({ onClick }) {
  return (
    <button onClick={() => onClick("a")}>Test Javascript</button>
  );
}

Component2.propTypes = {
  onClick: PropTypes.func.isRequired,
};
