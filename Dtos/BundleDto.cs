using Models;

namespace Dtos
{
    public class BundleDto
    {
        public BundleDto(Bundle bundle)
        {
            this.Id = bundle.Id;
            this.Name = bundle.Name;
        }

        public BundleDto()
        {

        }

        public string Name { get; set; }
        public int Id { get; set; }
    }
}
