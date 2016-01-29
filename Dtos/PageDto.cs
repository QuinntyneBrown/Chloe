using Models;

namespace Dtos
{
    public class PageDto
    {
        public PageDto() { }

        public PageDto(Page page)
        {
            this.Id = page.Id;
            this.Name = page.Name;            
        }

        public string Name { get; set; }
        public int Id { get; set; }
        public bool? Checked { get; set; }
    }
}
