export interface TimelineBody {
  title: String;
  content: String;
}
export interface TimelineItem {
  image: String;
  year: String;
  body: TimelineBody[];
}
