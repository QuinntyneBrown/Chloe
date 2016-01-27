using Models;
using System.Collections.Generic;
using System.Linq;

namespace Dtos
{
    public class BrandDto
    {
        public BrandDto(Brand brand) {
            this.Id = brand.Id;
            this.Name = brand.Name;
            this.Providers = brand.Providers.Select(x => new ProviderDto(x)).ToList();
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
