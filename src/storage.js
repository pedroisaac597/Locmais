const fs = require("fs");
const path = require("path");

const dataDirectory = path.join(__dirname, "..", "data");
const dataFile = path.join(dataDirectory, "content.json");

const initialContent = {
  videos: [
    {
      id: "video-1",
      title: "Como escolher o andaime ideal para sua obra",
      description:
        "Veja os principais pontos para definir altura, acesso e quantidade de equipamentos.",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      createdAt: "2026-05-26T00:00:00.000Z",
    },
  ],
  posts: [
    {
      id: "post-1",
      author: "Carlos Menezes",
      title: "Entrega rapida e material em bom estado",
      content:
        "Contratamos andaimes para uma reforma comercial e recebemos tudo revisado, com orientacao clara para a equipe.",
      createdAt: "2026-05-26T00:00:00.000Z",
    },
    {
      id: "post-2",
      author: "Mariana Souza",
      title: "A locacao ajudou no prazo da pintura",
      content:
        "A estrutura facilitou o acesso a fachada e a retirada foi combinada sem atrapalhar a rotina do condominio.",
      createdAt: "2026-05-26T00:00:00.000Z",
    },
  ],
};

function seedContent() {
  if (!fs.existsSync(dataDirectory)) {
    fs.mkdirSync(dataDirectory, { recursive: true });
  }

  if (!fs.existsSync(dataFile)) {
    writeContent(initialContent);
  }
}

function getContent() {
  seedContent();
  const rawContent = fs.readFileSync(dataFile, "utf8");
  return JSON.parse(rawContent);
}

function writeContent(content) {
  fs.writeFileSync(dataFile, `${JSON.stringify(content, null, 2)}\n`);
}

function addVideo(payload) {
  const title = cleanText(payload.title);
  const description = cleanText(payload.description);
  const url = cleanText(payload.url);
  const videoId = getYoutubeId(url);

  if (!title || !description || !url) {
    throw new Error("Preencha titulo, link e descricao do video.");
  }

  if (!videoId) {
    throw new Error("Informe um link valido do YouTube.");
  }

  const content = getContent();
  content.videos.unshift({
    id: createId("video"),
    title,
    description,
    url,
    embedUrl: `https://www.youtube.com/embed/${videoId}`,
    createdAt: new Date().toISOString(),
  });

  writeContent(content);
}

function addPost(payload) {
  const author = cleanText(payload.author);
  const title = cleanText(payload.title);
  const contentText = cleanText(payload.content);

  if (!author || !title || !contentText) {
    throw new Error("Preencha autor, titulo e texto da opiniao.");
  }

  const content = getContent();
  content.posts.unshift({
    id: createId("post"),
    author,
    title,
    content: contentText,
    createdAt: new Date().toISOString(),
  });

  writeContent(content);
}

function getYoutubeId(url) {
  try {
    const parsedUrl = new URL(url);
    const host = parsedUrl.hostname.replace("www.", "");

    if (host === "youtu.be") {
      return normalizeYoutubeId(parsedUrl.pathname.slice(1));
    }

    if (host.endsWith("youtube.com")) {
      if (parsedUrl.pathname === "/watch") {
        return normalizeYoutubeId(parsedUrl.searchParams.get("v"));
      }

      const pathParts = parsedUrl.pathname.split("/").filter(Boolean);
      if (["embed", "shorts", "live"].includes(pathParts[0])) {
        return normalizeYoutubeId(pathParts[1]);
      }
    }
  } catch (error) {
    return "";
  }

  return "";
}

function normalizeYoutubeId(value = "") {
  const match = String(value).match(/^[a-zA-Z0-9_-]{11}$/);
  return match ? match[0] : "";
}

function cleanText(value = "") {
  return String(value).trim().replace(/\s+/g, " ");
}

function createId(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

module.exports = {
  addPost,
  addVideo,
  getContent,
  seedContent,
};
