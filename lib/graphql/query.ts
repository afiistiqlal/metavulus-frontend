import { gql } from "graphql-request";

export const EVENTS = gql`
  query events {
    events(orderBy: publishedAt_DESC) {
      eventTitle
      eventSlug
      eventDescription
      featured
      eventThumbnail {
        url
      }
      eventDate
      eventCategory {
        categoryTitle
        categorySlug
      }
    }
  }
`;

export const CATEGORIES = gql`
  query eventCategories {
    eventCategories {
      categoryTitle
    }
  }
`;
