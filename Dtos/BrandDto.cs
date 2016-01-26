using Models;
using System.Collections.Generic;

namespace Dtos
{
    public class BrandDto
    {
        public BrandDto(Brand brand) {
            this.Id = brand.Id;
            this.Name = brand.Name;
        }

        public BrandDto()
        {
            this.Pages = new HashSet<PageDto>();
            this.Providers = new HashSet<ProviderDto>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<PageDto> Pages { get; set; }

        public ICollection<ProviderDto> Providers { get; set; }
        

    }
}
