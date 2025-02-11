export default function save({ attributes }) {
  return (
    <div
      className="custom-tabs"
      data-tabs={JSON.stringify(attributes.tabs)}
    ></div>
  );
}
