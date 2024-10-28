export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1> my name is : {params.id} </h1>
    </div>
  );
}
