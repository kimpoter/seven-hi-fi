import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DialogPresensi({
  trigger,
  cls,
  date,
  presensi,
  setPresensi,
}) {
  const presensiState =
    presensi[
      date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      })
    ];

  let presensiDisplay;
  if (presensiState) {
    let presensiStatus = presensiState[cls.matkulCode];
    if (presensiStatus) {
      switch (presensiStatus) {
        case "ATTEND":
          presensiDisplay = (
            <p className="py-4 text-center text-zinc-400">Sudah Tandai Hadir</p>
          );
          break;
        case "NOT ATTEND":
          presensiDisplay = (
            <p className="py-4 text-center text-zinc-400">
              Anda tidak mengisi presensi
            </p>
          );
          break;
        case "ACTIVE":
          presensiDisplay = (
            <Button
              className="hover:bg-seven-hyperlink-hover mx-auto my-4 max-w-max bg-seven-hyperlink"
              onClick={() => {
                console.log("baka");
                presensi[
                  date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })
                ][cls.matkulCode] = "ATTEND";
                setPresensi({ ...presensi });
              }}
            >
              Tandari Hadir
            </Button>
          );
          break;
        case "WILL ACTIVE":
          presensiDisplay = (
            <div className="flex flex-col items-center py-4">
              <p className="text-center text-sm text-zinc-400">
                Presensi mandiri dapat dilakukan pada
              </p>
              <p className="text-center text-lg text-zinc-400">
                {date.toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                - {cls.start}
              </p>
            </div>
          );
          break;
        default:
          presensiDisplay = "";
          break;
      }
    }
  }
  return (
    <>
      <Dialog>
        <DialogTrigger className="text-left">{trigger}</DialogTrigger>
        <DialogContent className="text-seven-font-size-default">
          <DialogHeader>
            <DialogTitle className="text-seven max-w-md text-2xl font-normal">
              {cls.matkulCode} - {cls.matkulName}
            </DialogTitle>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span>
                  {cls.start} - {cls.end}
                </span>
                <span>|</span>
                <span>
                  {date.toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div>
                <p className="font-bold">{cls.lecturer}</p>
                <p>{cls.location}</p>
              </div>
              <div>
                <p className="font-bold">Topik</p>
                <p>Topik Perkuliahan</p>
              </div>
              <div>
                <p className="font-bold">Catatan</p>
                <p>Catatan Perkuliahan</p>
              </div>
              {presensiDisplay}
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}