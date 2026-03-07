export const eventSectionAdapter = (section) => ({
  id: section.Id,
  eventName: section.EventName,
  title: section.Title,
  content: section.Content,
  createdAt: section.CreatedAt
});

export const eventContentListAdapter = (sections) => 
  sections.map(section => eventSectionAdapter(section));