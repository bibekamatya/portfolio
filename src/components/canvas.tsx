import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Project } from "../interfaces";
import ImageViewer from "./imageViewer";
import ListWithTitle from "./listWithTItle";

interface OffCanvasProps {
  isOpen: boolean;
  toggleCanvas: () => void;
  project: Project | null;
}

const OffCanvas = ({ isOpen, toggleCanvas, project }: OffCanvasProps) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (canvasRef.current) {
        canvasRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, project]);

  const openImageViewer = (index: number) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  const closeImageViewer = () => setIsViewerOpen(false);

  const nextImage = () => {
    if (project && project.images.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      project && project.images.length > 0
        ? (prevIndex - 1 + project.images.length) % project.images.length
        : 0
    );
  };

  const portalRoot = document.getElementById("canvas-portal") || document.body;

  return createPortal(
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => {
            toggleCanvas();
            setIsViewerOpen(false);
          }}
        ></div>
      )}

      {/* Off-canvas panel */}
      <div
        ref={canvasRef}
        className={`fixed left-0 top-0 bottom-0 w-full xl:max-w-5xl md:max-w-3xl bg-white dark:bg-black shadow-2xl z-50 overflow-y-auto transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          onClick={toggleCanvas}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </button>

        {project && (
          <div className="p-6 pt-16">
            <h2 className="text-3xl font-bold mb-2 gradient-text">
              {project.title}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {project.type}
            </p>
            <p className="text-base mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.overview}
            </p>

            {project.coreFeatures && (
              <ListWithTitle
                title="Core Features:"
                items={project.coreFeatures}
              />
            )}

            {project.advancedFeatures && (
              <ListWithTitle
                title="Advanced Features:"
                items={project.advancedFeatures}
              />
            )}

            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
              Technologies Used:
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project?.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 px-3 py-1.5 rounded-lg text-sm font-medium border border-brand-200 dark:border-brand-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Development Tools */}
            {project.development && (
              <>
                <ListWithTitle
                  title="Development Tools:"
                  items={project.development.tools}
                />

                {/* Development Practices */}
                <ListWithTitle
                  title="Development Practices:"
                  items={project.development.practices}
                />
              </>
            )}

            {project.images.length > 0 && (
              <>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  Project Images:
                </h3>
                <div className="flex space-x-4 mb-4 w-full overflow-x-auto pt-3">
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Project ${project.title} ${index + 1}`}
                      className="h-32 w-auto max-w-full object-cover rounded-md cursor-pointer"
                      onClick={() => openImageViewer(index)}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Deployed Project Link */}
            {project.deployedLink && (
              <a
                href={project.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 text-sm font-semibold rounded-lg ml-auto flex w-fit transition-all duration-300 shadow-lg"
              >
                Visit Project →
              </a>
            )}
          </div>
        )}
      </div>
      {/* Image Viewer */}
      {project && (
        <ImageViewer
          images={project.images}
          isOpen={isViewerOpen}
          currentIndex={currentIndex}
          onClose={closeImageViewer}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>,
    portalRoot
  );
};

export default OffCanvas;
