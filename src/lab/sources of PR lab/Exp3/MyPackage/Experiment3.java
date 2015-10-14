package MyPackage;

import java.awt.BasicStroke;
import java.awt.Color;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.EventQueue;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.MouseEvent;
import java.awt.geom.Point2D;
import java.awt.geom.Rectangle2D;
import java.util.Random;

import javax.swing.BorderFactory;
import javax.swing.DefaultComboBoxModel;
import javax.swing.GroupLayout;
import javax.swing.GroupLayout.Alignment;
import javax.swing.GroupLayout.ParallelGroup;
import javax.swing.GroupLayout.SequentialGroup;
import javax.swing.JApplet;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JToggleButton;
import javax.swing.LayoutStyle;
import javax.swing.LayoutStyle.ComponentPlacement;

import org.jfree.chart.ChartMouseEvent;
import org.jfree.chart.ChartMouseListener;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.annotations.XYLineAnnotation;
import org.jfree.chart.annotations.XYPointerAnnotation;
import org.jfree.chart.axis.ValueAxis;
import org.jfree.chart.plot.XYPlot;
import org.jfree.data.xy.XYSeries;
import org.jfree.data.xy.XYSeriesCollection;

public class Experiment3
  extends JApplet
{
  private JLabel a_text;
  private JToggleButton add_class_1;
  private JToggleButton add_class_2;
  private JPanel add_data_panel;
  private JButton classify_button;
  private JButton clear_button;
  private JPanel controls;
  private JPanel feature_graph;
  private JPanel graphs;
  private JPanel input_graph;
  private JPanel jPanel1;
  private JPanel jPanel2;
  private JPanel jPanel3;
  private JPanel jPanel4;
  private JLabel junk;
  private JComboBox neta_combo;
  private JButton start_button;
  private JLabel status_text;
  private JButton step_button;
  XYSeries series1;
  XYSeries series2;
  XYSeries out_series1;
  XYSeries out_series2;
  Chart1 chart;
  Chart1 out_chart;
  ChartPanel inner_graph;
  ChartPanel outer_graph;
  double line_a;
  double line_b;
  int k;
  
  public void init()
  {
    try
    {
      EventQueue.invokeAndWait(new Runnable()
      {
        public void run()
        {
          Experiment3.this.initComponents();
          Experiment3.this.initGraph();
          Experiment3.this.junk.setVisible(false);
        }
      });
    }
    catch (Exception ex)
    {
      ex.printStackTrace();
    }
  }
  
  public void initGraph()
  {
    XYSeriesCollection x1 = new XYSeriesCollection();
    this.series1 = new XYSeries("Class 1");
    this.series2 = new XYSeries("Class 2");
    x1.addSeries(this.series1);
    x1.addSeries(this.series2);
    this.chart = new Chart1(x1, "Y-axis", "X-axis");
    XYPlot plot = (XYPlot)this.chart.getPlot();
    plot.getDomainAxis().setRange(-1.1D, 1.1D);
    plot.getRangeAxis().setRange(-1.1D, 1.1D);
    
    this.inner_graph = new ChartPanel(this.chart);
    this.inner_graph.addChartMouseListener(new ChartMouseListener()
    {
      public void chartMouseClicked(ChartMouseEvent e)
      {
        Point2D p = Experiment3.this.inner_graph.translateScreenToJava2D(e.getTrigger().getPoint());
        Rectangle2D plotArea = Experiment3.this.inner_graph.getScreenDataArea();
        XYPlot plot = (XYPlot)Experiment3.this.chart.getPlot();
        double chartX = plot.getDomainAxis().java2DToValue(p.getY(), plotArea, plot.getDomainAxisEdge());
        double chartY = plot.getRangeAxis().java2DToValue(p.getX(), plotArea, plot.getRangeAxisEdge());
        if (Experiment3.this.add_class_1.isSelected()) {
          Experiment3.this.series1.add(0.0D, chartY);
        } else if (Experiment3.this.add_class_2.isSelected()) {
          Experiment3.this.series2.add(0.0D, chartY);
        }
      }
      
      public void chartMouseMoved(ChartMouseEvent event) {}
    });
    this.input_graph.add(this.inner_graph);
  }
  
  public static void main(String[] args)
  {
    Experiment3 applet = new Experiment3();
    applet.init();
    JFrame frame = new JFrame("Pattern Recognition : Experiment 3 - Perceptron");
    frame.getContentPane().add(applet);
    
    frame.setDefaultCloseOperation(3);
    frame.setSize(800, 500);
    frame.pack();
    frame.setVisible(true);
  }
  
  private void initComponents()
  {
    this.graphs = new JPanel();
    this.input_graph = new JPanel();
    this.feature_graph = new JPanel();
    this.controls = new JPanel();
    this.add_data_panel = new JPanel();
    this.add_class_2 = new JToggleButton();
    this.clear_button = new JButton();
    this.add_class_1 = new JToggleButton();
    this.jPanel2 = new JPanel();
    this.status_text = new JLabel();
    this.jPanel4 = new JPanel();
    this.a_text = new JLabel();
    this.jPanel1 = new JPanel();
    this.start_button = new JButton();
    this.step_button = new JButton();
    this.classify_button = new JButton();
    this.jPanel3 = new JPanel();
    this.neta_combo = new JComboBox();
    this.junk = new JLabel();
    
    this.graphs.setPreferredSize(new Dimension(1000, 500));
    this.graphs.setLayout(new GridLayout(1, 0, 10, 10));
    
    this.input_graph.setMaximumSize(new Dimension(400, 400));
    this.input_graph.setMinimumSize(new Dimension(300, 300));
    this.input_graph.setPreferredSize(new Dimension(500, 500));
    this.input_graph.setLayout(new GridLayout(1, 0));
    this.graphs.add(this.input_graph);
    
    this.feature_graph.setPreferredSize(new Dimension(500, 500));
    this.feature_graph.setLayout(new GridLayout(1, 0));
    this.graphs.add(this.feature_graph);
    
    getContentPane().add(this.graphs, "North");
    
    this.controls.setPreferredSize(new Dimension(1000, 150));
    
    this.add_data_panel.setBorder(BorderFactory.createTitledBorder("Add Data"));
    this.add_data_panel.setPreferredSize(new Dimension(329, 68));
    
    this.add_class_2.setText("Add Class 2");
    this.add_class_2.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment3.this.add_class_2ActionPerformed(evt);
      }
    });
    this.clear_button.setText("Clear");
    this.clear_button.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment3.this.clear_buttonActionPerformed(evt);
      }
    });
    this.add_class_1.setText("Add Class 1");
    this.add_class_1.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment3.this.add_class_1ActionPerformed(evt);
      }
    });
    GroupLayout add_data_panelLayout = new GroupLayout(this.add_data_panel);
    this.add_data_panel.setLayout(add_data_panelLayout);
    add_data_panelLayout.setHorizontalGroup(add_data_panelLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(add_data_panelLayout.createSequentialGroup().addContainerGap().addComponent(this.add_class_1).addGap(18, 18, 18).addComponent(this.add_class_2).addGap(18, 18, 18).addComponent(this.clear_button, -2, 95, -2).addContainerGap(71, 32767)));
    
    add_data_panelLayout.setVerticalGroup(add_data_panelLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(add_data_panelLayout.createSequentialGroup().addGroup(add_data_panelLayout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.add_class_1).addComponent(this.add_class_2).addComponent(this.clear_button)).addContainerGap()));
    
    this.jPanel2.setBorder(BorderFactory.createTitledBorder("Status"));
    this.jPanel2.setPreferredSize(new Dimension(240, 50));
    
    this.status_text.setText("Status");
    
    GroupLayout jPanel2Layout = new GroupLayout(this.jPanel2);
    this.jPanel2.setLayout(jPanel2Layout);
    jPanel2Layout.setHorizontalGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addContainerGap().addComponent(this.status_text).addContainerGap(334, 32767)));
    
    jPanel2Layout.setVerticalGroup(jPanel2Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel2Layout.createSequentialGroup().addComponent(this.status_text).addContainerGap(-1, 32767)));
    
    this.jPanel4.setBorder(BorderFactory.createTitledBorder("Value of a"));
    
    this.a_text.setText("[]");
    
    GroupLayout jPanel4Layout = new GroupLayout(this.jPanel4);
    this.jPanel4.setLayout(jPanel4Layout);
    jPanel4Layout.setHorizontalGroup(jPanel4Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel4Layout.createSequentialGroup().addContainerGap().addComponent(this.a_text, -1, 235, 32767).addContainerGap()));
    
    jPanel4Layout.setVerticalGroup(jPanel4Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel4Layout.createSequentialGroup().addComponent(this.a_text).addContainerGap(-1, 32767)));
    
    this.jPanel1.setBorder(BorderFactory.createTitledBorder("Steps"));
    this.jPanel1.setPreferredSize(new Dimension(373, 70));
    
    this.start_button.setText("Start");
    this.start_button.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment3.this.start_buttonActionPerformed(evt);
      }
    });
    this.step_button.setText("Step");
    this.step_button.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment3.this.step_buttonActionPerformed(evt);
      }
    });
    this.classify_button.setText("Step 100");
    this.classify_button.addActionListener(new ActionListener()
    {
      public void actionPerformed(ActionEvent evt)
      {
        Experiment3.this.classify_buttonActionPerformed(evt);
      }
    });
    GroupLayout jPanel1Layout = new GroupLayout(this.jPanel1);
    this.jPanel1.setLayout(jPanel1Layout);
    jPanel1Layout.setHorizontalGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup().addContainerGap().addComponent(this.start_button).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addComponent(this.step_button).addPreferredGap(LayoutStyle.ComponentPlacement.UNRELATED).addComponent(this.classify_button).addGap(86, 86, 86)));
    
    jPanel1Layout.setVerticalGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel1Layout.createSequentialGroup().addGroup(jPanel1Layout.createParallelGroup(GroupLayout.Alignment.BASELINE).addComponent(this.start_button).addComponent(this.step_button).addComponent(this.classify_button)).addContainerGap(-1, 32767)));
    
    this.jPanel3.setBorder(BorderFactory.createTitledBorder("Learning Parameter"));
    
    this.neta_combo.setModel(new DefaultComboBoxModel(new String[] { "1", "1/k", "1/k^2", "1/2^k", "k" }));
    
    GroupLayout jPanel3Layout = new GroupLayout(this.jPanel3);
    this.jPanel3.setLayout(jPanel3Layout);
    jPanel3Layout.setHorizontalGroup(jPanel3Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel3Layout.createSequentialGroup().addContainerGap().addComponent(this.neta_combo, -2, -1, -2).addContainerGap(67, 32767)));
    
    jPanel3Layout.setVerticalGroup(jPanel3Layout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(jPanel3Layout.createSequentialGroup().addComponent(this.neta_combo, -2, -1, -2).addContainerGap(14, 32767)));
    
    GroupLayout controlsLayout = new GroupLayout(this.controls);
    this.controls.setLayout(controlsLayout);
    controlsLayout.setHorizontalGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(controlsLayout.createSequentialGroup().addContainerGap().addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING, false).addComponent(this.jPanel2, -1, 400, 32767).addComponent(this.add_data_panel, -1, 400, 32767)).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING, false).addComponent(this.jPanel4, -1, -1, 32767).addComponent(this.jPanel1, -1, 271, 32767)).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(controlsLayout.createSequentialGroup().addGap(22, 22, 22).addComponent(this.junk)).addComponent(this.jPanel3, -2, -1, -2)).addContainerGap(23, 32767)));
    
    controlsLayout.setVerticalGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addGroup(controlsLayout.createSequentialGroup().addContainerGap().addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addComponent(this.jPanel1, -1, 68, 32767).addComponent(this.jPanel3, -1, -1, 32767).addComponent(this.add_data_panel, -1, -1, 32767)).addPreferredGap(LayoutStyle.ComponentPlacement.RELATED).addGroup(controlsLayout.createParallelGroup(GroupLayout.Alignment.LEADING).addComponent(this.jPanel4, 0, 52, 32767).addComponent(this.jPanel2, 0, 52, 32767).addComponent(this.junk)).addContainerGap()));
    
    getContentPane().add(this.controls, "Last");
  }
  
  private void add_class_1ActionPerformed(ActionEvent evt)
  {
    this.add_class_2.setSelected(false);
  }
  
  private void add_class_2ActionPerformed(ActionEvent evt)
  {
    this.add_class_1.setSelected(false);
  }
  
  private void clear_buttonActionPerformed(ActionEvent evt)
  {
    XYPlot p = (XYPlot)this.chart.getPlot();
    p.clearAnnotations();
    p.getDomainAxis().setRange(-1.1D, 1.1D);
    p.getRangeAxis().setRange(-1.1D, 1.1D);
    this.series1.clear();
    this.series2.clear();
    this.out_series1.clear();
    this.out_series2.clear();
    XYPlot p1 = (XYPlot)this.out_chart.getPlot();
    p1.clearAnnotations();
    this.feature_graph.removeAll();
    this.status_text.setText("");
    this.add_class_1.setSelected(false);
    this.add_class_2.setSelected(false);
  }
  
  private void start_buttonActionPerformed(ActionEvent evt)
  {
    this.feature_graph.removeAll();
    XYSeriesCollection x2 = new XYSeriesCollection();
    this.out_series1 = new XYSeries("Class 1");
    this.out_series2 = new XYSeries("Class 2");
    for (int i = 0; i < this.series1.getItemCount(); i++) {
      this.out_series1.add(1.0D, this.series1.getY(i).doubleValue());
    }
    for (int i = 0; i < this.series2.getItemCount(); i++) {
      this.out_series2.add(-1.0D, -this.series2.getY(i).doubleValue());
    }
    x2.addSeries(this.out_series1);
    x2.addSeries(this.out_series2);
    this.out_chart = new Chart1(x2, "Y-axis", "X-axis");
    XYPlot plot = (XYPlot)this.out_chart.getPlot();
    plot.getDomainAxis().setRange(-1.1D, 1.1D);
    plot.getRangeAxis().setRange(-1.1D, 1.1D);
    
    this.outer_graph = new ChartPanel(this.out_chart);
    this.feature_graph.add(this.outer_graph);
    Random r = new Random();
    this.line_a = r.nextGaussian();
    this.line_b = r.nextGaussian();
    plot_step();
    this.step_button.setEnabled(true);
    this.classify_button.setEnabled(true);
    this.junk.setText("Sd");
    this.k = 1;
  }
  
  private void step_buttonActionPerformed(ActionEvent evt)
  {
    if (step())
    {
      this.step_button.setEnabled(false);
      this.classify_button.setEnabled(false);
      this.status_text.setText("Classes Separated, iterations:" + this.k);
    }
    plot_step();
    this.status_text.setText("iterations:" + this.k);
  }
  
  private void classify_buttonActionPerformed(ActionEvent evt)
  {
    boolean flag = false;
    int initial = this.k;
    while (!step()) {
      if (this.k == initial + 100)
      {
        this.status_text.setText("iterations:" + this.k);
        plot_step();
        flag = true;
      }
    }
    if (!flag)
    {
      plot_step();
      this.status_text.setText("Classes Separated, iterations:" + this.k);
      this.step_button.setEnabled(false);
      this.classify_button.setEnabled(false);
    }
  }
  
  boolean step()
  {
    double temp_a = this.line_a;
    double temp_b = this.line_b;
    double add_a = 0.0D;double add_b = 0.0D;
    for (int i = 0; i < this.out_series1.getItemCount(); i++) {
      if (this.line_a * this.out_series1.getX(i).doubleValue() + this.line_b * this.out_series1.getY(i).doubleValue() < 0.0D)
      {
        add_a += this.out_series1.getX(i).doubleValue();
        add_b += this.out_series1.getY(i).doubleValue();
      }
    }
    for (int i = 0; i < this.out_series2.getItemCount(); i++) {
      if (this.line_a * this.out_series2.getX(i).doubleValue() + this.line_b * this.out_series2.getY(i).doubleValue() < 0.0D)
      {
        add_a += this.out_series2.getX(i).doubleValue();
        add_b += this.out_series2.getY(i).doubleValue();
      }
    }
    double neta = 1.0D;
    switch (this.neta_combo.getSelectedIndex())
    {
    case 0: 
      neta = 1.0D;
      break;
    case 1: 
      neta = 1.0D / this.k;
      break;
    case 2: 
      neta = 1.0D / Math.pow(this.k, 2.0D);
      break;
    case 3: 
      neta = 1.0D / Math.pow(2.0D, this.k);
      break;
    case 4: 
      neta = this.k;
    }
    this.line_a += neta * add_a;
    this.line_b += neta * add_b;
    this.k += 1;
    if ((this.line_a == temp_a) && (this.line_b == temp_b)) {
      return true;
    }
    return false;
  }
  
  void plot_step()
  {
    XYPlot plot = (XYPlot)this.out_chart.getPlot();
    plot.clearAnnotations();
    XYLineAnnotation a1 = new XYLineAnnotation(this.line_b / this.line_a, -1.0D, -this.line_b / this.line_a, 1.0D);
    plot.addAnnotation(a1);
    XYLineAnnotation a2 = new XYLineAnnotation(this.line_b, this.line_a, 0.0D, 0.0D, new BasicStroke(1.0F), Color.blue);
    plot.addAnnotation(a2);
    XYPointerAnnotation a3 = new XYPointerAnnotation(String.valueOf(this.line_a) + "," + String.valueOf(this.line_b), this.line_b, this.line_a, Math.atan2(this.line_b, this.line_a));
    plot.addAnnotation(a3);
    XYPlot other_plot = (XYPlot)this.chart.getPlot();
    other_plot.clearAnnotations();
    XYPointerAnnotation b = new XYPointerAnnotation(String.valueOf(-this.line_a / this.line_b), 0.0D, -this.line_a / this.line_b, Math.toRadians(90.0D));
    other_plot.addAnnotation(b);
    this.a_text.setText("[ " + String.valueOf(this.line_a) + ", " + String.valueOf(this.line_b) + " ]");
  }
}
