"use client";

import { useMemo, useState } from "react";

import { SearchX } from "lucide-react";

import { Disease } from "@/types/disease";

import DiseaseCard from "./DiseaseCard";

import Container from "@/components/common/Container";
import { Button } from "@/components/ui/button";

interface DiseaseListProps {
  diseases: Disease[];
}

const PAGE_SIZE = 9;

export default function DiseaseList({
  diseases,
}: DiseaseListProps) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(diseases.length / PAGE_SIZE);

  const paginatedDiseases = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;

    return diseases.slice(start, start + PAGE_SIZE);
  }, [diseases, page]);

  return (
    <section className="pb-20">
      <Container>
        <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              All Diseases
            </h2>

            <p className="mt-2 text-muted-foreground">
              Showing{" "}
              <span className="font-semibold text-foreground">
                {paginatedDiseases.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-foreground">
                {diseases.length}
              </span>{" "}
              diseases.
            </p>
          </div>
        </div>

        {paginatedDiseases.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border py-20 text-center">
            <SearchX className="mb-5 h-14 w-14 text-muted-foreground" />

            <h3 className="text-2xl font-semibold">
              No diseases found
            </h3>

            <p className="mt-3 max-w-md text-muted-foreground">
              Try changing your search keywords or selecting another category.
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {paginatedDiseases.map((disease) => (
                <DiseaseCard
                  key={disease.slug}
                  disease={disease}
                />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-12 flex justify-center gap-2">
                <Button
                  variant="outline"
                  disabled={page === 1}
                  onClick={() =>
                    setPage((prev) => prev - 1)
                  }
                >
                  Previous
                </Button>

                {Array.from(
                  { length: totalPages },
                  (_, index) => (
                    <Button
                      key={index}
                      variant={
                        page === index + 1
                          ? "default"
                          : "outline"
                      }
                      onClick={() =>
                        setPage(index + 1)
                      }
                    >
                      {index + 1}
                    </Button>
                  )
                )}

                <Button
                  variant="outline"
                  disabled={page === totalPages}
                  onClick={() =>
                    setPage((prev) => prev + 1)
                  }
                >
                  Next
                </Button>
              </div>
            )}
          </>
        )}
      </Container>
    </section>
  );
}