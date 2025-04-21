## Field Trip Project

### Project Summary

This project centers on the _Storyteller_ sculpture by Terry Tapia, a Tesuque Pueblo artist. Created between 1990 and 2005, this clay figure represents a storyteller surrounded by children, reflecting the Pueblo oral tradition of passing down cultural history through stories. The sculpture embodies community, heritage, and intergenerational connection. I chose this artifact because it illustrates how traditions and values are preserved through storytelling—something that can be powerfully shared using digital media.

### Core Webpages

- **Home Page**  
  Introduction to the artifact, including an image and a brief overview.

- **About the Artist**  
  A biography of Terry Tapia and a look into Tesuque Pueblo culture. Includes timeline animations of Tapia's work.

- **Explore the Sculpture**  
  An interactive 3D model or high-resolution image of the sculpture with clickable hotspots to learn about specific elements (e.g., the children, the storyteller’s pose, symbolism).

- **Storytelling Tradition**  
  A page dedicated to the oral storytelling traditions of the Pueblo peoples, including audio clips or transcripts of traditional stories.

### Design Choices

- **Inspiration Sites**:

  - [Google Arts & Culture](https://artsandculture.google.com/)
  - [Smithsonian National Museum of the American Indian](https://americanindian.si.edu/)
  - Clean and immersive layouts with deep focus on visuals and storytelling.

- **Color Palette**:

  - Terracotta (#E2725B) – reflects the clay medium of the sculpture.
  - Sand (#F4E1C1) – used for backgrounds to mimic earth tones.
  - Deep Brown (#5D3A1A) – for text and headers, symbolizing wood/earth.
  - Sky Blue (#87CEEB) – accent color to represent openness and air.

- **Data Structure**:  
  JSON format to store:
  ```json
  {
    "artifact": {
      "title": "Storyteller",
      "artist": "Terry Tapia",
      "culture": "Tesuque Pueblo",
      "medium": "carved clay, paint",
      "date": "1990-2005",
      "dimensions": "3 1/4 x 8 1/2 x 9 in.",
      "image": "assets/images/storyteller.png",
      "model": "assets/models/storyteller.fbx"
    }
  }
  ```
