using System.Collections.Generic;

namespace Models
{
    public class Page : BaseEntity
    {
        public Page()
        {
            this.ComponentPages = new HashSet<ComponentPage>();
            this.Brands = new HashSet<Brand>(); 
        }

        public ICollection<Brand> Brands { get; set; }
        public ICollection<ComponentPage> ComponentPages { get; set; }
    }
}
