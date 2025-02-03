import { getAllSuperheroes } from "@/app/server/actions/superhero/getAllSuperheroes";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export async function SuperHeroesList() {
  const superheroes = await getAllSuperheroes();
  return (
    <div className="bg-background flex w-full relative">
      <Table className="w-full border-collapse">
        <TableHeader className="sticky top-0 flex w-full">
          <TableRow className="hover:bg-transparent flex w-full mb-4 border-none">
            <TableHead className="p-4  w-1/3 text-center text-xs md:text-base font-semibold">
              Name
            </TableHead>
            <TableHead className="p-4  w-1/3 text-center text-xs md:text-base font-semibold">
              Superpower
            </TableHead>
            <TableHead className="p-4  w-1/3 text-center text-xs md:text-base font-semibold">
              Humility Score
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="flex flex-col items-center  overflow-y-scroll w-full h-[240px]">
          {superheroes.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3} className="text-center p-4">
                No superheroes found
              </TableCell>
            </TableRow>
          ) : (
            superheroes.map((item) => (
              <TableRow
                key={item.id}
                className={`flex w-full ${
                  item.id === superheroes[superheroes.length - 1].id
                    ? "mb-4"
                    : ""
                }`}
              >
                <TableCell className="p-4 w-1/3 text-center border-r">
                  {item.name}
                </TableCell>
                <TableCell className="p-4 w-1/3 text-center border-r">
                  {item.superpower}
                </TableCell>
                <TableCell className="p-4 text-center w-1/3">
                  {item.humilityScore}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

//   const superheroes = await getAllSuperheroes();
//   return (
//     <Table className="text-left w-full">
//       <TableHeader className="flex  w-full">
//         <TableRow className="flex w-full mb-4">
//           <TableHead className="p-4 w-1/3">Name</TableHead>
//           <TableHead className="p-4 w-1/3">Superpower</TableHead>
//           <TableHead className="p-4 w-1/3">Humility Score</TableHead>
//         </TableRow>
//       </TableHeader>

//       {superheroes.length > 0 ? (
//         <TableBody className=" flex flex-col items-center justify-between overflow-y-scroll w-full h-[240px]">
//           {superheroes.map((item) => (
//             <TableRow key={item.id} className="border-b flex w-full">
//               <TableCell className="p-4 w-1/3">{item.name}</TableCell>
//               <TableCell className="p-4 w-1/3">{item.superpower}</TableCell>
//               <TableCell className="p-4 w-1/3 text-center">
//                 {item.humilityScore}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       ) : (
//         <TableBody className="flex flex-col items-center justify-between  w-full h-[240px]">
//           <TableRow />
//           <TableRow className="border-none">
//             <TableCell colSpan={3} className="text-center p-4 border-none">
//               No superheroes found
//             </TableCell>
//           </TableRow>
//           <TableRow />
//         </TableBody>
//       )}
//     </Table>
//   );
// };
