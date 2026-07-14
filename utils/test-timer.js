export const SECONDS_PER_QUESTION = 40;
export const MIN_SECONDS_PER_QUESTION = 30;
export const MAX_SECONDS_PER_QUESTION = 300;

export function testDurationSeconds(
  questionCount,
  secondsPerQuestion = SECONDS_PER_QUESTION,
) {
  const count = Number.isFinite(questionCount) ? Math.max(0, questionCount) : 0;
  const seconds = Number.isFinite(secondsPerQuestion)
    ? Math.min(
        MAX_SECONDS_PER_QUESTION,
        Math.max(MIN_SECONDS_PER_QUESTION, Math.floor(secondsPerQuestion)),
      )
    : SECONDS_PER_QUESTION;
  return Math.floor(count) * seconds;
}

export function formatCountdown(totalSeconds) {
  const seconds = Math.max(0, Math.ceil(totalSeconds));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainder = seconds % 60;
  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(remainder).padStart(2, "0");
  return hours
    ? `${String(hours).padStart(2, "0")}:${paddedMinutes}:${paddedSeconds}`
    : `${paddedMinutes}:${paddedSeconds}`;
}
