const VideoSection = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="w-full max-w-xs aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.youtube.com/embed/Gxu35lggWv0"
            title="Vídeo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
