export default function convertTime(input) {
  return moment(input, ["hh:mm A"]).format("HH:mm");
}
