import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function MovieList() {
  return (
    <>
      <div className="flex flex-col">
        <div className="grid mt-5 xl:grid-cols-4">
          {Array(15)
            .fill()
            .map((item, index) => {
              return (
                <div
                  className="flex flex-col mt-6 ml-4 mr-4 overflow-hidden"
                  key={index}
                >
                  <SkeletonTheme color="#edf2f7" highlightColor="#a0aec0">
                    <Skeleton
                      className="flex-1 block w-full rounded-lg"
                      height={350}
                      width={`100%`}
                    />

                    <Skeleton
                      className="justify-center mt-3"
                      height={25}
                      width={`50%`}
                    />
                  </SkeletonTheme>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
